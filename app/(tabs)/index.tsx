import {
  cryptogramECDHValueData,
  MockCryptogramPaymentDataFFD1_05, MockCryptogramPaymentDataFFD1_2,
  MockPayResponse,
  MockTransactionStateWaitFor3ds,
  MockTransactionStatus,
} from "@/constants/mockData";
import { enc, HmacSHA256 } from "crypto-js";
import { Formik } from "formik";
import paymentApi from "payselection-pay-app-sdk-reactnative/src/api/payment";
import getStatusApi from "payselection-pay-app-sdk-reactnative/src/api/status";
import {
  getCryptogramECDHValue,
  getCryptogramRSAValue,
} from "payselection-pay-app-sdk-reactnative/src/types/payment/cryptoUtils";
import {
  CryptogramPayment,
  CryptogramRSAPayment,
  PublicPayHeader, SberPayPayment,
} from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";
import { PayResponse } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentResponse";
import {
  GetStatusByOrderIdHeader,
  GetStatusByTransactionIdHeader,
} from "payselection-pay-app-sdk-reactnative/src/types/status/statusPayload";
import {
  MultiStateTransactionInfo,
  TransactionStateDeclined,
  TransactionStateRedirect,
  TransactionStateWaitFor3ds,
} from "payselection-pay-app-sdk-reactnative/src/types/status/statusResponse";
import { SignatureProps } from "payselection-pay-app-sdk-reactnative/src/utils/common";
import React, { useEffect, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ScrollView = Animated.ScrollView;

const payHeader: PublicPayHeader = {
  X_SITE_ID: '21044',
  X_REQUEST_ID: '4f6b71f1-ddfd-489b-b855-Testq4',
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

const requiredInputsFieldsList = [
  { label: "OrderId", value: MockCryptogramPaymentDataFFD1_05.OrderId, key: "OrderId" },
  { label: "Amount", value: MockCryptogramPaymentDataFFD1_05.Amount, key: "Amount" },
  { label: "Currency", value: MockCryptogramPaymentDataFFD1_05.Currency, key: "Currency" },
  { label: "Description", value: MockCryptogramPaymentDataFFD1_05.Description, key: "Description" },
  { label: "RebillFlag", value: MockCryptogramPaymentDataFFD1_05.RebillFlag, key: "RebillFlag" },
  { label: "Email", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.Email, key: "CustomerInfo.Email" },
  { label: "Phone", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.Phone, key: "CustomerInfo.Phone" },
  { label: "Language", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.Language, key: "CustomerInfo.Language" },
  { label: "Address", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.Address, key: "CustomerInfo.Address" },
  { label: "Town", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.Town, key: "CustomerInfo.Town" },
  { label: "ZIP", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.ZIP, key: "CustomerInfo.ZIP" },
  { label: "Country", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.Country, key: "CustomerInfo.Country" },
  { label: "IP", value: MockCryptogramPaymentDataFFD1_05.CustomerInfo.IP, key: "CustomerInfo.IP" },
  { label: "Value", value: MockCryptogramPaymentDataFFD1_05.PaymentDetails.Value, key: "PaymentDetails.Value" },
  { label: "PaymentMethod", value: MockCryptogramPaymentDataFFD1_05.PaymentMethod, key: "PaymentMethod" },
]

const extraDataInputsFieldsList = [
  { label: "ReturnUrl", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.ReturnUrl, key: "ExtraData.ReturnUrl" },
  { label: "WebhookUrl", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.ReturnUrl, key: "ExtraData.WebhookUrl" },
  { label: "ScreenHeight", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.ScreenHeight, key: "ExtraData.ScreenHeight" },
  { label: "ScreenWidth", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.ScreenWidth, key: "ExtraData.ScreenWidth" },
  { label: "ChallengeWindowSize", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.ChallengeWindowSize, key: "ExtraData.ChallengeWindowSize" },
  { label: "TimeZoneOffset", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.TimeZoneOffset, key: "ExtraData.TimeZoneOffset" },
  { label: "ColorDepth", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.ColorDepth, key: "ExtraData.ColorDepth" },
  { label: "Region", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.Region, key: "ExtraData.Region" },
  { label: "UserAgent", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.UserAgent, key: "ExtraData.UserAgent" },
  { label: "acceptHeader", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.acceptHeader, key: "ExtraData.acceptHeader" },
  { label: "JavaEnabled", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.JavaEnabled, key: "ExtraData.JavaEnabled" },
  { label: "javaScriptEnabled", value: MockCryptogramPaymentDataFFD1_05.ExtraData?.javaScriptEnabled, key: "ExtraData.javaScriptEnabled" },
]

export default function HomeScreen() {
  const [publicPayResult, setPublicPayResult] = useState<PayResponse>(MockPayResponse);
  const [transactionIdStatus, setTransactionIdStatus] =
      useState<MultiStateTransactionInfo
              | TransactionStateDeclined
              | TransactionStateWaitFor3ds
              | TransactionStateRedirect>(MockTransactionStatus);
  const [orderIdStatus, setOrderIdStatus] = useState<MultiStateTransactionInfo
      | TransactionStateDeclined
      | TransactionStateWaitFor3ds
      | TransactionStateRedirect>(MockTransactionStateWaitFor3ds);
  const [selectedButton, setSelectedButton] = useState<string>('1.05');
  
  let initialState = MockCryptogramPaymentDataFFD1_05;
  const handlePress = (value: string) => {
    setSelectedButton(value);
  };
  const createPayment = async (values: CryptogramPayment ) => {
    
    const publicRSAKey="LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFxbk56eXlwR1R6cENZeDlzMnh6RQpaQ3B4eVkyL2YrbWljb0drWW1rV0M5Szl2SlIvcEtUL0VOUThCT1hIRkFBYW5Mb05PNzVLcmJUQ3Z5Y2pXbkJGCnhYQlJZY2NWeGsxaVB0c0VKbkNlcThmYXMwa2dYMFgzLzFnTFdvbkhheVdTUUl5emFTMXMrWUdsNEJyd2s5c08KTTQyZlk0dkM1WGptU1YxUDNlN2pvNUN1d2hxL2ljUkxZbTg1MXBYRTRiZ3FZYS96NEsrbXhUcWJvdC94b3lhTQpxSmlIOS9EUnQveTc0Z2t6Q0VIRThGQ0M4TkJlVXZUckRWbnlSQ0dtSlpVTDh0QnhPd1N3Ty94M1lzZi9CNU9vCkVjbllWdjVSQmF1MDl4VmFGTFN5QkZiRUsvZnRDUktFeUNQbnpYS2FnbTQ3T2dROEIvTkdhQ0cxRmdVOUhJb2gKd093TmsycWY1NTRPR21Oa0E3MnZCR1E0RTZ4TldUSnFJQWhOTUJQTjFMZGdRNXZTamszTUVJRHQ3Y3FEZzhFRwpCNU0vVS9VT2lVU2tXWmFtR3pXOVZFbkJhRFdWZFpxVVpTc0d0aCtJM093NGRPUUxiZG4rdzljYlpHLzR2VmwvCmFKdTdlQlZ2WVhEL0o0TnIzMk5RZ1o2YzlpMCtNU3RwWFUxMlJ4bzhJK1hCNVpZUTkzNE5iVXJoeDBuMlJhQk0KbGtlSTFtbE1ncWI3ME9BRk5zaDUyNUFIL3k5OVpJTzhsR0RqVEpSdDlKZzdGNVFmUEVWekRIbXdxdy9FaFFjQwpjVG5QaGRLOE53NDJ3QldIVDhXYXg4Y1NxYTdwRytTM2JOYkZvUVJlU1dvK2pzV0JNOU1NemJvckNqYWE1UzRNCnNCV0UyN2FRSElVMU5sTGNqK0laUldzQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo=";
    const publicKey="04bd07d3547bd1f90ddbd985feaaec59420cabd082ff5215f34fd1c89c5d8562e8f5e97a5df87d7c99bc6f16a946319f61f9eb3ef7cf355d62469edb96c8bea09e\n";
    
    //for CryptogramRSA
    
    //const cryptogram = getCryptogramRSAValue(cryptogramRSAValueData, publicRSAKey);
    //values.PaymentDetails.Value = cryptogram;*/
    
    
    //for Cryptogram
    try {
      const cryptogram = getCryptogramECDHValue(cryptogramECDHValueData, publicKey);
      values.PaymentDetails.Value = await cryptogram;
    } catch (error) {
      console.error('Encryption failed:', error);
    }
    
    
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
  
  useEffect(() => {
    if (selectedButton === "1.05") {
      initialState = MockCryptogramPaymentDataFFD1_05;
    } else {
      initialState = MockCryptogramPaymentDataFFD1_2
    }
  }, [selectedButton]);
  

  return (
      <ScrollView style={styles.stepContainer}>
        
        <Formik
            key={selectedButton}
            initialValues={initialState}
            onSubmit={values => createPayment(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.inputsContainer}>
                {requiredInputsFieldsList.map(({ label, key, value }) => (
                    <View key={key} style={styles.row}>
                      <Text>{label}</Text>
                      <TextInput
                          style={styles.inputFiled}
                          // @ts-ignore
                          value={key.split('.').reduce((o, i) => o[i], values)}
                          onChangeText={handleChange(key)}
                          onBlur={handleBlur(key)}
                          placeholder={label}
                      
                      />
                    </View>
                ))}
                <View><Text style={{fontWeight: 'bold'}}>ExtaData: </Text></View>
                <View style={styles.inputsContainer}>
                  {extraDataInputsFieldsList.map(({ label, key, value }) => (
                      <View key={key} style={styles.row}>
                        <Text>{label}</Text>
                        <TextInput
                            style={styles.inputFiled}
                            onChangeText={handleChange(key)}
                            onBlur={handleBlur(key)}
                            // @ts-ignore
                            value={key.split('.').reduce((o, i) => o[i], values)}
                            placeholder={label}
                        />
                      </View>
                  ))}
                </View>
                <View style={styles.container}>
                  <Text style={styles.label}>One of</Text>
                  <TouchableOpacity
                      style={[styles.switchButton, selectedButton === '1.05' && styles.selectedButton]}
                      onPress={() => handlePress('1.05')}
                  >
                    <Text style={[styles.buttonText, selectedButton === '1.05' && styles.selectedButtonText]}>ffd1.05</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.switchButton, selectedButton === '1.2' && styles.selectedButton]}
                      onPress={() => handlePress('1.2')}
                  >
                    <Text style={[styles.buttonText, selectedButton === '1.2' && styles.selectedButtonText]}>ffd1.2</Text>
                  </TouchableOpacity>
                </View>
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
