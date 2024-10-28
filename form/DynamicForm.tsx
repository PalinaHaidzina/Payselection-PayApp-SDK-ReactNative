import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { List } from "react-native-paper";
import { Field } from "@/constants/fieldList";
import {
  CryptogramPayment,
  CryptogramRSAPayment,
  ExternalFormPayment,
  QRCodePayment,
  SberPayPayment,
  TokenBasedPayment,
} from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";
import {
  signatureGeneration,
  SignatureProps,
} from "payselection-pay-app-sdk-reactnative/src/utils/common";
import {
  MultiStateTransactionInfo,
  TransactionStateDeclined,
  TransactionStateRedirect,
  TransactionStateWaitFor3ds,
} from "payselection-pay-app-sdk-reactnative/src/types/status/statusResponse";
import { MockPayResponse, MockTransactionStatus } from "@/constants/mockData";
import { PayResponse } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentResponse";
import {
  CryptogramValueProps,
  getCryptogramRSAValue,
  getCryptogramECDHValue,
} from "payselection-pay-app-sdk-reactnative/src/types/payment/cryptoUtils";
import { defineFieldsList, generateXRequestId } from "@/common/utils";
import { PAYMENT_METHOD } from "@/types/paymentMethods";
import {
  GetStatusByOrderIdHeader,
  GetStatusByTransactionIdHeader,
} from "payselection-pay-app-sdk-reactnative/src/types/status/statusPayload";
import getStatusApi from "payselection-pay-app-sdk-reactnative/src/api/status";
import { Colors } from "@/style/Colors";
import paymentApi from "payselection-pay-app-sdk-reactnative/src/api/payment";
import {
  PUBLIC_KEY,
  PUBLIC_RSA_KEY,
  SITE_SECRET_KEY,
  X_SITE_ID,
} from "@/constants/requestData";

interface DynamicFormProps {
  defaultFormFields: any;
  fieldList: Field[];
}

const signatureTransaction: SignatureProps = {
  requestMethod: "GET",
  url: "",
  xSiteId: X_SITE_ID,
  xRequestId: "",
  siteSecretKey: "",
};

const signatureOrder: SignatureProps = {
  requestMethod: "GET",
  url: "",
  xSiteId: X_SITE_ID,
  xRequestId: "",
  siteSecretKey: "",
};

const DynamicForm = ({ defaultFormFields, fieldList }: DynamicFormProps) => {
  const statusByTransactionIdApiUrl =
    process.env.EXPO_PUBLIC_API_TRANSACTION_ID_URL;
  const statusByOrderIdApiUrl = process.env.EXPO_PUBLIC_API_ORDER_ID_URL;

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: defaultFormFields,
    shouldUnregister: false,
  });

  const paymentMethodField = watch("PaymentMethod");

  const [transactionIdStatus, setTransactionIdStatus] = useState<
    | MultiStateTransactionInfo
    | TransactionStateDeclined
    | TransactionStateWaitFor3ds
    | TransactionStateRedirect
  >(MockTransactionStatus);

  const [orderIdRequestStatus, setOrderIdRequestStatus] = useState("");
  const [publicPayResult, setPublicPayResult] =
    useState<PayResponse>(MockPayResponse);

  const [isGetTransactionIdButtonDisabled, setGetTransactionIdButtonDisabled] =
    useState(true);
  const [isGetOrderIdButtonDisabled, setGetOrderIdButtonDisabled] =
    useState(true);
  const [isCreatePaymentButtonDisabled, setCreatePaymentButtonDisabled] =
    useState(true);

  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const generateUniqueKey = (fieldKey: string) => `section_${fieldKey}`;

  const formatStringToArray = (value: string): string[] => {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
  };

  const onSubmit = async (
    data:
      | CryptogramPayment
      | CryptogramRSAPayment
      | SberPayPayment
      | TokenBasedPayment
      | ExternalFormPayment
      | QRCodePayment,
  ) => {
    const xRequestId = generateXRequestId();
    const payHeader = {
      X_SITE_ID: X_SITE_ID,
      X_REQUEST_ID: xRequestId,
    };

    const cryptogramValue: CryptogramValueProps = {
      TransactionDetails: {
        Amount: data.Amount,
        Currency: data.Currency,
      },
      PaymentDetails: {
        CardholderName: "Card Holder",
        CardNumber: "4111111111111111",
        CVC: "603",
        ExpMonth: "04",
        ExpYear: "44",
      },
      PaymentMethod: data.PaymentMethod,
      MessageExpiration: Date.now() + 86400000,
    };

    let cryptogram = "";

    switch (data.PaymentMethod) {
      case PAYMENT_METHOD.CryptogramRSA: {
        cryptogram = getCryptogramRSAValue(cryptogramValue, PUBLIC_RSA_KEY);
        break;
      }
      case PAYMENT_METHOD.Cryptogram: {
        try {
          cryptogram = await getCryptogramECDHValue(
            cryptogramValue,
            PUBLIC_KEY,
          );
          break;
        } catch (error) {
          console.error(error);
        }
        break;
      }
      default:
        cryptogram = "";
    }

    if (
      data.PaymentMethod === "Cryptogram" ||
      data.PaymentMethod === "CryptogramRSA"
    ) {
      data.PaymentDetails.Value = cryptogram;
    }

    try {
      const result = await paymentApi.publicPay(data, payHeader);
      setPublicPayResult(result);
      setGetOrderIdButtonDisabled(!result?.OrderId);
      setGetTransactionIdButtonDisabled(!result?.TransactionId);
      console.log("PUBLIC PAY");
      console.log(`Pay header: ${JSON.stringify(payHeader)}`);
      console.log(`Pay body: ${JSON.stringify(data)}`);
      console.log(`Pay response:  ${JSON.stringify(result)}`);
    } catch (error) {
      console.error(error);
    }
  };

  const getTransactionIdStatus = async () => {
    const transactionIdStatusHeader: GetStatusByTransactionIdHeader = {
      X_SITE_ID: X_SITE_ID,
      X_REQUEST_ID: "",
      X_REQUEST_SIGNATURE: "",
    };

    if (publicPayResult.TransactionId) {
      transactionIdStatusHeader.X_REQUEST_ID = generateXRequestId();
      signatureTransaction.xRequestId = transactionIdStatusHeader.X_REQUEST_ID;
      signatureTransaction.xSiteId = transactionIdStatusHeader.X_SITE_ID;
      signatureTransaction.url = `${statusByTransactionIdApiUrl}${publicPayResult.TransactionId}`;
      signatureTransaction.siteSecretKey = publicPayResult.TransactionSecretKey;
      transactionIdStatusHeader.X_REQUEST_SIGNATURE =
        signatureGeneration(signatureTransaction);

      try {
        const result = await getStatusApi.getStatusByTransactionId(
          publicPayResult.TransactionId,
          transactionIdStatusHeader,
        );
        console.log("\n\nGET STATUS BY TRANSACTION ID");
        console.log(
          `Status by transaction id header: ${JSON.stringify(transactionIdStatusHeader)}`,
        );
        console.log(
          `Status by transaction id body: ${JSON.stringify(publicPayResult.TransactionId)}`,
        );
        console.log(
          `Status by transaction id response:  ${JSON.stringify(result)}`,
        );
        setTransactionIdStatus(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getOrderIdStatus = async () => {
    const orderIdStatusHeader: GetStatusByOrderIdHeader = {
      X_SITE_ID: X_SITE_ID,
      X_REQUEST_ID: "",
      X_REQUEST_SIGNATURE: "",
    };
    signatureOrder.url = `${statusByOrderIdApiUrl}${publicPayResult.OrderId}`;
    signatureOrder.xRequestId = generateXRequestId();
    signatureOrder.siteSecretKey = SITE_SECRET_KEY;
    orderIdStatusHeader.X_REQUEST_ID = signatureOrder.xRequestId;
    orderIdStatusHeader.X_REQUEST_SIGNATURE =
      signatureGeneration(signatureOrder);

    try {
      const result = await getStatusApi.getStatusByOrderId(
        publicPayResult.OrderId,
        orderIdStatusHeader,
      );
      setOrderIdRequestStatus("OK");
      console.log("\n\nGET STATUS BY ORDER ID");
      console.log(
        `Status by order id header: ${JSON.stringify(orderIdStatusHeader)}`,
      );
      console.log(
        `Status by order id body: ${JSON.stringify(publicPayResult.OrderId)}`,
      );
      console.log(`Status by order id response:  ${JSON.stringify(result)}`);
    } catch (error) {
      console.error(error);
      setOrderIdRequestStatus("ERROR");
    }
  };

  const renderField = (field: Field, parentKey = "") => {
    const fullKey = field.key;

    if (field.fieldType === "text" || field.fieldType === "number") {
      return (
        <View style={styles.fieldContainer} key={fullKey}>
          <Text style={styles.label}>{field.name}</Text>
          <Controller
            control={control}
            name={field.key}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(text) => {
                  if (field.isMulti) {
                    onChange(formatStringToArray(text));
                  } else if (field.isNumeric) {
                    onChange(text ? Number(text) : "");
                  } else {
                    onChange(text);
                  }
                }}
                value={value ?? ""}
                placeholder={field.placeholder}
                keyboardType={
                  field.fieldType === "number" ? "numeric" : "default"
                }
              />
            )}
          />
        </View>
      );
    }

    if (field.fieldType === "picker") {
      return (
        <View style={styles.fieldContainer} key={fullKey}>
          <Text style={styles.dropdownTitle}>{field.name}</Text>
          <Controller
            control={control}
            name={fullKey}
            render={({ field: { onChange, value } }) => (
              <List.Accordion
                title={
                  value !== undefined
                    ? field.options?.find((option) => option.value === value)
                        ?.label || value.toString()
                    : "Please select"
                }
                expanded={expanded[fullKey] || false}
                onPress={() => toggleExpand(fullKey)}
              >
                {field.options?.map((option) => (
                  <List.Item
                    key={option.value.toString()}
                    title={option.label}
                    onPress={() => {
                      onChange(option.value);
                      toggleExpand(fullKey);
                    }}
                  />
                ))}
              </List.Accordion>
            )}
          />
        </View>
      );
    }

    if (field.fieldType === "group") {
      const uniqueKey = generateUniqueKey(fullKey);
      return (
        <View key={fullKey} style={styles.section}>
          <TouchableOpacity onPress={() => toggleExpand(uniqueKey)}>
            <Text style={styles.sectionTitle}>
              {field.name} {expanded[uniqueKey] ? "-" : "+"}
            </Text>
          </TouchableOpacity>
          <View style={expanded[uniqueKey] ? {} : { display: "none" }}>
            {field.subfields?.map((subfield) => renderField(subfield, fullKey))}
          </View>
        </View>
      );
    }

    if (field.fieldType === "array") {
      const {
        fields: arrayFields,
        append,
        remove,
      } = useFieldArray({ control, name: fullKey });

      const uniqueKey = generateUniqueKey(fullKey);

      return (
        <View key={fullKey} style={styles.section}>
          <TouchableOpacity onPress={() => toggleExpand(uniqueKey)}>
            <Text style={styles.sectionTitle}>
              {field.name} {expanded[uniqueKey] ? "-" : "+"}
            </Text>
          </TouchableOpacity>
          <View style={expanded[uniqueKey] ? {} : { display: "none" }}>
            {arrayFields.map((item, index) => (
              <View key={item.id} style={styles.arrayItem}>
                {field.subfields?.map((subfield) =>
                  renderField(
                    {
                      ...subfield,
                      key: `${fullKey}[${index}].${subfield.key.split(".").pop()}`,
                    },
                    fullKey,
                  ),
                )}
                <Button
                  title="Remove"
                  color="red"
                  onPress={() => remove(index)}
                />
              </View>
            ))}
            <Button title="Add Item" onPress={() => append({})} />
          </View>
        </View>
      );
    }

    return null;
  };

  useEffect(() => {
    reset(defaultFormFields);
    if (paymentMethodField) {
      setCreatePaymentButtonDisabled(false);
    }
  }, [defaultFormFields, reset, paymentMethodField]);

  return (
    <ScrollView style={styles.container}>
      {defineFieldsList(defaultFormFields.PaymentMethod, fieldList).map(
        (field: Field) => renderField(field, ""),
      )}
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={handleSubmit(onSubmit)}
          style={[
            styles.styledButton,
            isCreatePaymentButtonDisabled && {
              backgroundColor: Colors.secondaryText,
            },
          ]}
          disabled={isCreatePaymentButtonDisabled}
        >
          <Text style={styles.buttonText}>Create payment</Text>
        </Pressable>
        <Pressable
          onPress={getTransactionIdStatus}
          style={[
            styles.styledButton,
            isGetTransactionIdButtonDisabled && {
              backgroundColor: Colors.secondaryText,
            },
          ]}
          disabled={!publicPayResult?.TransactionId}
        >
          <Text style={styles.buttonText}>Get status by TransactionID</Text>
        </Pressable>
        <Pressable
          onPress={getOrderIdStatus}
          style={[
            styles.styledButton,
            isGetOrderIdButtonDisabled && {
              backgroundColor: Colors.secondaryText,
            },
          ]}
          disabled={!publicPayResult?.OrderId}
        >
          <Text style={styles.buttonText}>Get status by OrderID</Text>
        </Pressable>
      </View>
      {publicPayResult?.TransactionSecretKey && (
        <View>
          <Text
            style={{ fontWeight: "bold", paddingVertical: 10, fontSize: 16 }}
          >
            PaymentResult:{" "}
          </Text>
          {Object.entries(publicPayResult).map(([key, value]) => (
            <Text key={key}>{`${key}: ${value}`}</Text>
          ))}
        </View>
      )}
      {transactionIdStatus?.TransactionState && (
        <View>
          <Text
            style={{ fontWeight: "bold", paddingVertical: 10, fontSize: 16 }}
          >
            TransactionId Status:{" "}
          </Text>
          {Object.entries(transactionIdStatus).map(([key, value]) => (
            <Text key={key}>{`${key}: ${value}`}</Text>
          ))}
        </View>
      )}
      {orderIdRequestStatus && (
        <View>
          <Text
            style={{ fontWeight: "bold", paddingVertical: 10, fontSize: 16 }}
          >
            OrderId request Status:{" "}
          </Text>
          <Text>{orderIdRequestStatus}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  fieldContainer: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    borderRadius: 4,
  },
  section: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  fieldGroup: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  arrayItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  styledButton: {
    marginHorizontal: 20,
    backgroundColor: Colors.buttonBackground,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    maxWidth: "20%",
    justifyContent: "flex-start",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default DynamicForm;
