import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from "react";
import {PaymentMethod} from "@/types/types";
import {defaultPaymentPayloadValues} from "@/constants/formFielsLists/formDefaultValues";
import {List} from "react-native-paper";
import {paymentTypesHandbook} from "@/constants/formFielsLists/handbook";
import DynamicForm from "@/components/form/DynamicForm";
import {fieldsFFD1_02, fieldsFFD1_05} from "@/constants/fieldList";
import {Colors} from "@/constants/Colors";
import {MockCryptogramPaymentDataFFD1_2} from "@/constants/mockData";

export default function Tab() {
    const [expanded, setExpanded] = React.useState(false);
    const [selected, setSelected] = useState<PaymentMethod>();
    const [defaultFormValues, setDefaultFormValues] = useState(MockCryptogramPaymentDataFFD1_2);

    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        const updateFormValues = (paymentMethod: PaymentMethod, paymentDetails?: { Value?: string, Type?: string, PayToken?: string }) => {
            setDefaultFormValues({
                ...defaultFormValues,
                PaymentMethod: paymentMethod,
                ...(paymentDetails && { PaymentDetails: paymentDetails }),
            });
        };

        switch (selected) {
            case PaymentMethod.Cryptogram:
                updateFormValues(PaymentMethod.Cryptogram, { Value: "" });
                break;
            case PaymentMethod.Token:
                updateFormValues(PaymentMethod.Token, { Type: "", PayToken: ""});
                break;
            case PaymentMethod.QR:
                updateFormValues(PaymentMethod.QR);
                break;
            case PaymentMethod.ExternalForm:
                updateFormValues(PaymentMethod.ExternalForm);
                break;
            case PaymentMethod.CryptogramRSA:
                updateFormValues(PaymentMethod.CryptogramRSA, { Value: "" });
                break;
            case PaymentMethod.SberPay:
                updateFormValues(PaymentMethod.SberPay);
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

                <DynamicForm defaultFormFields={defaultFormValues} fieldList={fieldsFFD1_02}/>
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
        fontSize: 16
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
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
    }
});
