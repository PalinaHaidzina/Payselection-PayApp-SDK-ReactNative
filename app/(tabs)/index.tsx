import { enc, HmacSHA256 } from "crypto-js";
import { Formik } from "formik";
import paymentApi from "payselection-pay-app-sdk-reactnative/src/api/payment";
import getStatusApi from "payselection-pay-app-sdk-reactnative/src/api/status";
import {
  CryptogramRSAPayment,
  PublicPayHeader,
} from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";
import { PayResponse } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentResponse";
import { getCryptogramValue } from "payselection-pay-app-sdk-reactnative/src/types/payment/utils";
import {
  GetStatusByOrderIdHeader,
  GetStatusByTransactionIdHeader,
} from "payselection-pay-app-sdk-reactnative/src/types/status/statusPayload";
import {
  MultiStateTransactionInfo,
  TransactionStateDeclined, TransactionStateRedirect, TransactionStateWaitFor3ds,
} from "payselection-pay-app-sdk-reactnative/src/types/status/statusResponse";
import { SignatureProps } from "payselection-pay-app-sdk-reactnative/src/utils/common";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text, Switch, TouchableOpacity, Animated } from "react-native";


import { ThemedView } from '@/components/ThemedView';
import ScrollView = Animated.ScrollView;

const payHeader: PublicPayHeader = {
  X_SITE_ID: '21044',
  X_REQUEST_ID: '4f6b71f1-ddfd-489b-b855-480ebb255612v',
}

const MockSignatureTransaction: SignatureProps = {
  requestMethod: 'GET',
  url: '',
  xSiteId: '21044',
  xRequestId: '4f6b71f1-ddfd-489b-b855-480ebb2556393u',
  siteSecretKey: '',
}

const transactionIdStatusHeader: GetStatusByTransactionIdHeader = {
  X_SITE_ID: '21044',
  X_REQUEST_ID: '4f6b71f1-ddfd-489b-b855-480ebb2556393u',
  X_REQUEST_SIGNATURE: "",
}

const MockSignatureOrderId: SignatureProps = {
  requestMethod: 'GET',
  url: '/orders/',
  xSiteId: '21044',
  xRequestId: '4f6b71f1-ddfd-489b-b855-480ebb2556pl91qj',
  siteSecretKey: 'jdPnu3LKGnBqShN3',
}

const orderIdStatusHeader: GetStatusByOrderIdHeader = {
  X_SITE_ID: '21044',
  X_REQUEST_ID: '4f6b71f1-ddfd-489b-b855-480ebb2556pl91qj',
  X_REQUEST_SIGNATURE: "",
}

const extractPathFromUrl = ( url: string ): string => {
  const parts = url.split( '/' );
  parts.splice( 0, 3 );
  return '/' + parts.join( '/' );
};

const signatureGeneration = ( {
  requestMethod,
  url,
  xRequestId,
  xSiteId,
  requestBody,
  siteSecretKey,
}: SignatureProps ) => {
  
  if (requestMethod === 'GET') {
    url = extractPathFromUrl( url );
    requestBody = '';
  }
  
  const signature_string = `${requestMethod}\n${url}\n${xSiteId}\n${xRequestId}\n${requestBody}`;
  return HmacSHA256( signature_string, siteSecretKey ).toString( enc.Hex );
}


const MockCryptogramPaymentData: CryptogramRSAPayment = {
  OrderId: "SAM_SDK_3",
  Amount: "11.00",
  Currency: "RUB",
  Description: "test payment",
  RebillFlag: false,
  CustomerInfo: {
    Email: "user@example.com",
    Phone: "+19991231212",
    Language: "en",
    Address: "string",
    Town: "string",
    ZIP: "1234567",
    Country: "USA",
    IP: "10.0.2.56"
  },
  PaymentDetails: {
    Value: "",
  },
  PaymentMethod: "CryptogramRSA",
}

const cryptogramValueData = {
  TransactionDetails: {
    Amount: "11.00",
    Currency: "RUB",
  },
  PaymentDetails: {
    CardholderName: "Card Holder",
    CardNumber: "4111111111111111",
    CVC: "603",
    ExpMonth: "04",
    ExpYear: "44"
  },
  PaymentMethod: "CryptogramRSA",
  MessageExpiration: Date.now() + 86400000,
}

const requiredInputsFieldsList = [
  { label: "OrderId", value: MockCryptogramPaymentData.OrderId, key: "order-id-filed" },
  { label: "Amount", value: MockCryptogramPaymentData.Amount, key: "amount-filed" },
  { label: "Currency", value: MockCryptogramPaymentData.Currency, key: "currency-filed" },
  { label: "Description", value: MockCryptogramPaymentData.Description, key: "description-filed" },
  { label: "RebillFlag", value: MockCryptogramPaymentData.RebillFlag, key: "rebill-flag-filed" },
  { label: "Email", value: MockCryptogramPaymentData.CustomerInfo.Email, key: "email-filed" },
  { label: "Phone", value: MockCryptogramPaymentData.CustomerInfo.Phone, key: "phone-filed" },
  { label: "Language", value: MockCryptogramPaymentData.CustomerInfo.Language, key: "language-filed" },
  { label: "Address", value: MockCryptogramPaymentData.CustomerInfo.Address, key: "address-filed" },
  { label: "Town", value: MockCryptogramPaymentData.CustomerInfo.Town, key: "town-filed" },
  { label: "ZIP", value: MockCryptogramPaymentData.CustomerInfo.ZIP, key: "zip-filed" },
  { label: "Country", value: MockCryptogramPaymentData.CustomerInfo.Country, key: "country-filed" },
  { label: "IP", value: MockCryptogramPaymentData.CustomerInfo.IP, key: "ip-filed" },
  { label: "Value", value: MockCryptogramPaymentData.PaymentDetails.Value, key: "value-filed" },
  { label: "PaymentMethod", value: MockCryptogramPaymentData.PaymentMethod, key: "payment-method-filed" },
]

const payHeader: PublicPayHeader = {
  X_SITE_ID: '21044',
  X_REQUEST_ID: '4f6b71f1-ddfd-489b-b855-480ebb255612x',
}

const MockSignatureTransaction: SignatureProps = {
  requestMethod: 'GET',
  url: '',
  xSiteId: '21044',
  xRequestId: '4f6b71f1-ddfd-489b-b855-480ebb2556393n',
  siteSecretKey: '',
}

const transactionIdStatusHeader: GetStatusByTransactionIdHeader = {
  X_SITE_ID: '21044',
  X_REQUEST_ID: '4f6b71f1-ddfd-489b-b855-480ebb2556393n',
  X_REQUEST_SIGNATURE: "",
}

const MockSignatureOrderId: SignatureProps = {
  requestMethod: 'GET',
  url: '/orders/',
  xSiteId: '21044',
  xRequestId: '4f6b71f1-ddfd-489b-b855-480ebb2556pl91q3',
  siteSecretKey: 'jdPnu3LKGnBqShN3',
}

const orderIdStatusHeader: GetStatusByOrderIdHeader = {
  X_SITE_ID: '21044',
  X_REQUEST_ID: '4f6b71f1-ddfd-489b-b855-480ebb2556pl91q3',
  X_REQUEST_SIGNATURE: "",
}

const extractPathFromUrl = ( url: string ): string => {
  const parts = url.split( '/' );
  parts.splice( 0, 3 );
  return '/' + parts.join( '/' );
};

const signatureGeneration = ( {
  requestMethod,
  url,
  xRequestId,
  xSiteId,
  requestBody,
  siteSecretKey,
}: SignatureProps ) => {
  
  if (requestMethod === 'GET') {
    url = extractPathFromUrl( url );
    requestBody = '';
  }
  
  const signature_string = `${requestMethod}\n${url}\n${xSiteId}\n${xRequestId}\n${requestBody}`;
  return HmacSHA256( signature_string, siteSecretKey ).toString( enc.Hex );
}


const MockCryptogramPaymentData: CryptogramRSAPayment = {
  OrderId: "SAM_SDK_3",
  Amount: "11.00",
  Currency: "RUB",
  Description: "test payment",
  RebillFlag: false,
  CustomerInfo: {
    Email: "user@example.com",
    Phone: "+19991231212",
    Language: "en",
    Address: "string",
    Town: "string",
    ZIP: "1234567",
    Country: "USA",
    IP: "10.0.2.56"
  },
  PaymentDetails: {
    Value: "",
  },
  PaymentMethod: "CryptogramRSA",
}

const cryptogramValueData = {
  TransactionDetails: {
    Amount: "11.00",
    Currency: "RUB",
  },
  PaymentDetails: {
    CardholderName: "Card Holder",
    CardNumber: "4111111111111111",
    CVC: "603",
    ExpMonth: "04",
    ExpYear: "44"
  },
  PaymentMethod: "CryptogramRSA",
  MessageExpiration: Date.now() + 86400000,
}

const inputsFieldsList = [
  { label: "OrderId", value: MockCryptogramPaymentData.OrderId, key: "order-id-filed" },
  { label: "Amount", value: MockCryptogramPaymentData.Amount, key: "amount-filed" },
  { label: "Currency", value: MockCryptogramPaymentData.Currency, key: "currency-filed" },
  { label: "Description", value: MockCryptogramPaymentData.Description, key: "description-filed" },
  { label: "RebillFlag", value: MockCryptogramPaymentData.RebillFlag, key: "rebill-flag-filed" },
  { label: "Email", value: MockCryptogramPaymentData.CustomerInfo.Email, key: "email-filed" },
  { label: "Phone", value: MockCryptogramPaymentData.CustomerInfo.Phone, key: "phone-filed" },
  { label: "Language", value: MockCryptogramPaymentData.CustomerInfo.Language, key: "language-filed" },
  { label: "Address", value: MockCryptogramPaymentData.CustomerInfo.Address, key: "address-filed" },
  { label: "Town", value: MockCryptogramPaymentData.CustomerInfo.Town, key: "town-filed" },
  { label: "ZIP", value: MockCryptogramPaymentData.CustomerInfo.ZIP, key: "zip-filed" },
  { label: "Country", value: MockCryptogramPaymentData.CustomerInfo.Country, key: "country-filed" },
  { label: "IP", value: MockCryptogramPaymentData.CustomerInfo.IP, key: "ip-filed" },
  { label: "Value", value: MockCryptogramPaymentData.PaymentDetails.Value, key: "value-filed" },
  { label: "PaymentMethod", value: MockCryptogramPaymentData.PaymentMethod, key: "payment-method-filed" },

]

export default function HomeScreen() {
  const [publicPayResult, setPublicPayResult] = useState<PayResponse>({});
  const [transactionIdStatus, setTransactionIdStatus] =
      useState<MultiStateTransactionInfo
              | TransactionStateDeclined
              | TransactionStateWaitFor3ds
              | TransactionStateRedirect>({});
  const [orderIdStatus, setOrderIdStatus] = useState<MultiStateTransactionInfo
      | TransactionStateDeclined
      | TransactionStateWaitFor3ds
      | TransactionStateRedirect>({});
  const createPayment = async (values: CryptogramRSAPayment ) => {
    
    const publicKey="LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFxbk56eXlwR1R6cENZeDlzMnh6RQpaQ3B4eVkyL2YrbWljb0drWW1rV0M5Szl2SlIvcEtUL0VOUThCT1hIRkFBYW5Mb05PNzVLcmJUQ3Z5Y2pXbkJGCnhYQlJZY2NWeGsxaVB0c0VKbkNlcThmYXMwa2dYMFgzLzFnTFdvbkhheVdTUUl5emFTMXMrWUdsNEJyd2s5c08KTTQyZlk0dkM1WGptU1YxUDNlN2pvNUN1d2hxL2ljUkxZbTg1MXBYRTRiZ3FZYS96NEsrbXhUcWJvdC94b3lhTQpxSmlIOS9EUnQveTc0Z2t6Q0VIRThGQ0M4TkJlVXZUckRWbnlSQ0dtSlpVTDh0QnhPd1N3Ty94M1lzZi9CNU9vCkVjbllWdjVSQmF1MDl4VmFGTFN5QkZiRUsvZnRDUktFeUNQbnpYS2FnbTQ3T2dROEIvTkdhQ0cxRmdVOUhJb2gKd093TmsycWY1NTRPR21Oa0E3MnZCR1E0RTZ4TldUSnFJQWhOTUJQTjFMZGdRNXZTamszTUVJRHQ3Y3FEZzhFRwpCNU0vVS9VT2lVU2tXWmFtR3pXOVZFbkJhRFdWZFpxVVpTc0d0aCtJM093NGRPUUxiZG4rdzljYlpHLzR2VmwvCmFKdTdlQlZ2WVhEL0o0TnIzMk5RZ1o2YzlpMCtNU3RwWFUxMlJ4bzhJK1hCNVpZUTkzNE5iVXJoeDBuMlJhQk0KbGtlSTFtbE1ncWI3ME9BRk5zaDUyNUFIL3k5OVpJTzhsR0RqVEpSdDlKZzdGNVFmUEVWekRIbXdxdy9FaFFjQwpjVG5QaGRLOE53NDJ3QldIVDhXYXg4Y1NxYTdwRytTM2JOYkZvUVJlU1dvK2pzV0JNOU1NemJvckNqYWE1UzRNCnNCV0UyN2FRSElVMU5sTGNqK0laUldzQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo=";
    
    const cryptogram = getCryptogramValue(cryptogramValueData, publicKey);
    values.PaymentDetails.Value = cryptogram;
    
    const result = await paymentApi.publicPay(values, payHeader);
    setPublicPayResult(result);
    
  }
  
  const getOrderIdStatus = async () => {
    MockSignatureOrderId.url = `https://gw.payselection.com/orders/${publicPayResult.OrderId}`;
    const signature = signatureGeneration(MockSignatureOrderId);
    orderIdStatusHeader.X_REQUEST_SIGNATURE = signature;
    
    const result =
        await getStatusApi.getStatusByOrderId(publicPayResult.OrderId, orderIdStatusHeader);
    setOrderIdStatus(result);
  }
  
  const getTransactionIdStatus = async () => {
    if (publicPayResult.TransactionId) {
      MockSignatureTransaction.url = `https://gw.payselection.com/transactions/${publicPayResult.TransactionId}`;
      MockSignatureTransaction.siteSecretKey = publicPayResult.TransactionSecretKey;
      const signature = signatureGeneration(MockSignatureTransaction);
      transactionIdStatusHeader.X_REQUEST_SIGNATURE = signature;
      
      const result =
          await getStatusApi.getStatusByTransactionId( publicPayResult.TransactionId, transactionIdStatusHeader);
      setTransactionIdStatus(result);
    }
  }
  
  return (
      <ScrollView style={styles.stepContainer}>

        <Formik
            initialValues={MockCryptogramPaymentData}
            onSubmit={values => createPayment(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.inputsContainer}>

                {requiredInputsFieldsList.map(({ label, key, value }) => (

                    <View key={key} style={styles.row}>
                      <Text>{label}</Text>
                      <TextInput
                          style={styles.inputFiled}
                          onChangeText={handleChange(label.toLowerCase())}
                          onBlur={handleBlur(label.toLowerCase())}
                          // @ts-ignore
                          value={value}
                          placeholder={label}
                      />
                    </View>
                ))}
                <Pressable style={styles.button} onPress={() => handleSubmit()}>
                  <Text style={styles.text}>Create public pay</Text>
                </Pressable>
              </View>
          )}
        </Formik>
        <Pressable style={styles.button} onPress={() => getTransactionIdStatus()}>
          <Text style={styles.text}>Get transaction status</Text>
        </Pressable>
        <Text>
          {transactionIdStatus.TransactionState}{"\n"}
          {transactionIdStatus.TransactionId}{"\n"}
          {transactionIdStatus.OrderId}{"\n"}
        </Text>
        <Pressable style={styles.button} onPress={() => getOrderIdStatus()}>
          <Text style={styles.text}>Get order status</Text>
        </Pressable>
        <Text>

          {/*@ts-ignore*/}
          {orderIdStatus[0]?.TransactionState}{"\n"}
          {/*@ts-ignore*/}
          {orderIdStatus[0]?.TransactionId}{"\n"}
          {/*@ts-ignore*/}
          {orderIdStatus[0]?.OrderId}{"\n"}
        </Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: "white",
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "white",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginBottom: 10,
    width: "100%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  inputsContainer: {
    gap: 8,
    marginTop: 10,
    marginHorizontal: 24,
    backgroundColor: "none",
  },
  inputFiled: {
    borderColor: "black",
    borderStyle: "solid",
    height: 30,
    borderWidth: 2,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    width: "100%",
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  switchButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#0000FF',
  },
  buttonText: {
    color: '#000',
  },
  selectedButtonText: {
    color: '#FFF',
  },
});
