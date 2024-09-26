import DynamicForm from "@/components/form/DynamicForm";
import { Colors } from "@/constants/Colors";
import { fieldsList } from "@/constants/fieldList";
import { FormFieldType } from "@/constants/formFielsLists/commonTypes";
import { booleanHandbook, paymentTypesHandbook, receiptPaymentTypeHandbook } from "@/constants/formFielsLists/handbook";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Animated, StyleSheet, TextInput, View, Text } from "react-native";
import ScrollView = Animated.ScrollView;

const CustomerInfoFieldsMap = [
  {
    type: FormFieldType.input,
    name: "CustomerInfo.Email",
    placeholder: "Email",
    key: "customer-info-email",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.Phone",
    placeholder: "Phone",
    key: "customer-info-phone",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.Language",
    placeholder: "Language",
    key: "customer-info-language",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.Address",
    placeholder: "Address",
    key: "customer-info-address",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.Town",
    placeholder: "Town",
    key: "customer-info-town",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.ZIP",
    placeholder: "ZIP",
    key: "customer-info-zip",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.Country",
    placeholder: "Country",
    key: "customer-info-county",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.IP",
    placeholder: "IP",
    key: "customer-info-ip",
  },
  {
    type: FormFieldType.input,
    name: "CustomerInfo.UserId",
    placeholder: "UserId",
    key: "customer-info-user-id",
  },
];

const ExtraDataFieldsMap = [
  {
    type: FormFieldType.input,
    name: "ExtraData.ReturnUrl",
    placeholder: "ReturnUrl",
    key: "extra-data-return-url",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.WebhookUrl",
    placeholder: "WebhookUrl",
    key: "extra-data-webhook",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.ScreenHeight",
    placeholder: "ScreenHeight",
    key: "extra-data-screen-height",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.ScreenWidth",
    placeholder: "ScreenWidth",
    key: "extra-data-screen-width",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.ChallengeWindowSize",
    placeholder: "ChallengeWindowSize",
    key: "extra-data-challenge-window-size",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.TimeZoneOffset",
    placeholder: "TimeZoneOffset",
    key: "extra-data-time-zone-offset",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.ColorDepth",
    placeholder: "ColorDepth",
    key: "extra-data-color-depth",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.Region",
    placeholder: "Region",
    key: "extra-data-region",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.UserAgent",
    placeholder: "UserAgent",
    key: "extra-data-user-agent",
  },
  {
    type: FormFieldType.input,
    name: "ExtraData.acceptHeader",
    placeholder: "acceptHeader",
    key: "extra-data-accept-header",
  },
  {
    type: FormFieldType.picker,
    name: "ExtraData.JavaEnabled",
    placeholder: "JavaEnabled",
    key: "extra-data-Java-enabled",
    options: booleanHandbook
  },
  {
    type: FormFieldType.picker,
    name: "ExtraData.javaScriptEnabled",
    placeholder: "javaScriptEnabled",
    key: "extra-data-java-script-enabled",
    options: booleanHandbook
  },
]


export default function HomeScreen() {
  const [paymentType, setPaymentType] = useState("Cryptogram");
  const [receiptType, setReceiptType] = useState("FFD1_05");
  
  
  return (
      <View style={styles.container}>
        
        <View style={styles.screenBorder}>
          <ScrollView style={styles.scrollWrapper}>
            
            <View style={styles.pickerContainer}>
              <View style={styles.picker}>
                <Picker
                    selectedValue={paymentType}
                    onValueChange={(itemValue, itemIndex) =>
                        setPaymentType(itemValue)
                    }
                    style={{color: Colors.text, fontWeight: "700", fontSize: 16, height: 40, top: -8}}
                >
                  {paymentTypesHandbook.map((paymentType) => (
                      <Picker.Item
                          key={paymentType.value}
                          label={paymentType.label}
                          value={paymentType.value}
                      />
                  ))}
                </Picker>
              </View>
              
              <View style={styles.picker}>
                <Picker
                    selectedValue={receiptType}
                    onValueChange={(itemValue, itemIndex) =>
                        setReceiptType(itemValue)
                    }
                    style={{color: Colors.text, fontWeight: "700", fontSize: 16, height: 40, top: -8}}
                >
                  {receiptPaymentTypeHandbook.map((receiptType) => (
                      <Picker.Item
                          key={receiptType.value}
                          label={receiptType.label}
                          value={receiptType.value}
                      />
                  ))}
                </Picker>
              </View>
              
              
            </View>
            
            {/*<View style={styles.formContainer}>
              {
                fieldsList.map((field) => {
                  const {
                    type,name, placeholder, key, options
                  } = field;
                  
                  switch(type) {
                    case FormFieldType.input:
                      return (
                        <TextInput
                          key={key}
                          placeholder={placeholder}
                          style={styles.input}
                        />
                      );
                    case FormFieldType.picker:
                      return (
                        <View style={styles.picker}>
                          <Picker style={{color: Colors.text, fontWeight: "700", fontSize: 16, height: 40, top: -8}}
                          >
                            {options?.map((option) => (
                                <Picker.Item
                                    key={key}
                                    label={option.label}
                                    value={option.value}
                                />
                            ))}
                          </Picker>
                        </View>
                      );
                    case FormFieldType.subTitle:
                      return (
                          <Text style={styles.subTittle} key={key}>{name}</Text>
                      );
                  }
                })
              }
            </View>*/}
            
            <DynamicForm />
          </ScrollView>
        </View>
        
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
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
    maxHeight: "90%",
    paddingHorizontal: 20,
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
    fontSize: 16
  }
});
