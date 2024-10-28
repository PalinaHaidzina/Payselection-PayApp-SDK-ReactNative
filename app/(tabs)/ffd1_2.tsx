import { View, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { PAYMENT_METHOD } from "@/types/paymentMethods";
import { List } from "react-native-paper";
import { paymentTypesHandbook } from "@/constants/handbook";
import DynamicForm from "@/form/DynamicForm";
import { fieldsFFD1_02 } from "@/constants/fieldList";
import { Colors } from "@/style/Colors";
import { MockCryptogramPaymentDataFFD1_2 } from "@/constants/mockData";

export default function Tab() {
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = useState<PAYMENT_METHOD>();
  const [defaultFormValues, setDefaultFormValues] = useState(
    MockCryptogramPaymentDataFFD1_2,
  );

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    const updateFormValues = (
      paymentMethod: PAYMENT_METHOD,
      paymentDetails?: { Value?: string; Type?: string; PayToken?: string },
    ) => {
      setDefaultFormValues({
        ...defaultFormValues,
        PaymentMethod: paymentMethod,
        ...(paymentDetails && { PaymentDetails: paymentDetails }),
      });
    };

    switch (selected) {
      case PAYMENT_METHOD.Cryptogram:
        updateFormValues(PAYMENT_METHOD.Cryptogram, { Value: "" });
        break;
      case PAYMENT_METHOD.Token:
        updateFormValues(PAYMENT_METHOD.Token, { Type: "", PayToken: "" });
        break;
      case PAYMENT_METHOD.QR:
        updateFormValues(PAYMENT_METHOD.QR);
        break;
      case PAYMENT_METHOD.ExternalForm:
        updateFormValues(PAYMENT_METHOD.ExternalForm);
        break;
      case PAYMENT_METHOD.CryptogramRSA:
        updateFormValues(PAYMENT_METHOD.CryptogramRSA, { Value: "" });
        break;
      case PAYMENT_METHOD.SberPay:
        updateFormValues(PAYMENT_METHOD.SberPay);
        break;
      default:
        break;
    }
  }, [selected]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollWrapper}>
        <View>
          <List.Accordion
            title={selected || "Select Payment Method"}
            style={styles.dropdownContainer}
            expanded={expanded}
            onPress={handlePress}
          >
            {paymentTypesHandbook?.map((option: any) => (
              <List.Item
                key={option.value.toString()}
                title={option.label}
                onPress={() => {
                  setSelected(option.value);
                  handlePress();
                }}
              />
            ))}
          </List.Accordion>
        </View>

        <DynamicForm
          defaultFormFields={defaultFormValues}
          fieldList={fieldsFFD1_02}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    height: "100%",
    backgroundColor: Colors.background,
  },
  screenBorder: {
    borderColor: Colors.text,
    borderWidth: 1,
    borderStyle: "solid",
    maxHeight: "100%",
  },
  scrollWrapper: {
    marginVertical: 20,
  },
  pickerContainer: {
    flexDirection: "column",
  },
  picker: {
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderStyle: "solid",
    maxHeight: "100%",
    borderRadius: 15,
    marginBottom: 10,
  },
  formContainer: {
    gap: 10,
  },
  subTittle: {
    color: Colors.text,
    fontWeight: "700",
    fontSize: 20,
  },
  input: {
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderStyle: "solid",
    maxHeight: "100%",
    borderRadius: 15,
    height: 40,
    paddingHorizontal: 10,
    color: Colors.text,
    fontWeight: "700",
    fontSize: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  output: {
    marginTop: 20,
    fontSize: 16,
  },
  dropdownContainer: {
    borderRadius: 8,
    backgroundColor: Colors.background,
    height: 60,
  },
});
