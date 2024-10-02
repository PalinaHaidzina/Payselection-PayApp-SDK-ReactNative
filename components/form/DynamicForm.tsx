import {paymentInfoList} from "@/constants/fieldList";
import {FormFieldType} from "@/constants/formFielsLists/commonTypes";
import { CryptogramPayment } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {Colors} from "@/constants/Colors";
import { TextInput, List } from 'react-native-paper';


interface DynamicFormProps {
    defaultFormFields: any;
}

interface FormField {
    type: FormFieldType;
    name: string;
    placeholder?: string;
    key: string;
    options?: Array<{ label: string; value: string | number | boolean}>;
    subfields?: FormField[];
}

const DynamicForm = ({ defaultFormFields }: DynamicFormProps) => {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: defaultFormFields
    });

    const { fields: receiptItemsFields, append: appendReceiptItem, remove: removeReceiptItem } = useFieldArray({
        control,
        name: "ReceiptData.receipt.items",
    });
    const { fields: payingAgentPhonesFields, append: appendPayingAgentPhoneField, remove: removePayingAgentPhoneField } = useFieldArray({
        control,
        name: "ReceiptData.receipt.agent_info.paying_agent.phones",
    });
    const { fields:receivePaymentsOperatorFields, append: appendReceivePaymentsOperatorField, remove: removeReceivePaymentsOperatorField } = useFieldArray({
        control,
        name: "ReceiptData.receipt.agent_info.receive_payments_operator.phones",
    });
    const { fields: moneyTransferPhonesFields, append: appendMoneyTransferField, remove: removeMoneyTransferField } = useFieldArray({
        control,
        name: "ReceiptData.receipt.agent_info.money_transfer_operator.phones",
    })
    const { fields: supplierInfoPhonesFields, append: appendSupplierInfoPhoneField, remove: removeSupplierInfoPhoneField } = useFieldArray({
        control,
        name: "ReceiptData.receipt.supplier_info.phones",
    })
    const { fields: paymentsFields, append: appendPaymentField, remove: removePaymentField } = useFieldArray({
        control,
        name: "ReceiptData.receipt.payments",
    })

    const fieldArrayMap: Record<string, { fields: any[]; append: any; remove: any }> = {
        "ReceiptData.receipt.items": { fields: receiptItemsFields, append: appendReceiptItem, remove: removeReceiptItem },
        "ReceiptData.receipt.payments": { fields: paymentsFields, append: appendPaymentField, remove: removePaymentField },
        "ReceiptData.receipt.agent_info.paying_agent.phones": { fields: payingAgentPhonesFields, append: appendPayingAgentPhoneField, remove: removePayingAgentPhoneField },
        "ReceiptData.receipt.agent_info.receive_payments_operator.phones": { fields: receivePaymentsOperatorFields, append: appendReceivePaymentsOperatorField, remove: removeReceivePaymentsOperatorField },
        "ReceiptData.receipt.agent_info.money_transfer_operator.phones": { fields: moneyTransferPhonesFields, append: appendMoneyTransferField, remove: removeMoneyTransferField },
        "ReceiptData.receipt.supplier_info.phones": { fields: supplierInfoPhonesFields, append: appendSupplierInfoPhoneField, remove: removeSupplierInfoPhoneField },
    };

    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
    const [selected, setSelected] = useState<{ [key: string]: string | number | boolean }>({});
    const [activeSection, setActiveSection] = useState<string | null>(null); // Состояние для текущей активной секции


    const handleSelect = (
        name: string,
        value: string | number | boolean,
        onChange: (value: string | number | boolean) => void
    ) => {
        setSelected((prev) => ({ ...prev, [name]: value }));
        onChange(value);
        toggleExpand(name);
    };

    const toggleExpand = (key: string) => {
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
        setActiveSection(prev => prev === key ? null : key);
    };
    
    const onSubmit = (data: CryptogramPayment) => {
        console.log(data);
    };


    const getDefaultValues = (name: string) => {
        switch (name) {
            case "ReceiptData.receipt.items":
                return { name: '', price: '', quantity: '', sum: '', vat: { type: '', sum: '' }, agent_info: {}, supplier_info: {} }; // Возвращаем новый объект
            case "ReceiptData.payments":
                return { method: '', amount: '' };
            case "ReceiptData.receipt.agent_info.paying_agent.phones":
            case "ReceiptData.receipt.agent_info.receive_payments_operator.phones":
            case "ReceiptData.receipt.agent_info.money_transfer_operator.phones":
            case "ReceiptData.receipt.supplier_info.phones":
                return '';
            default:
                return {};
        }
    };

    const renderField = (field: FormField, depth: number = 0, parentName: string = '') => {
        const { type, name, placeholder, key, options, subfields } = field;

        const fieldName = parentName ? `${parentName}.${name}` : name;

        switch (type) {
            case FormFieldType.input: {
                return (
                    <Controller
                        key={key}
                        control={control}
                        name={fieldName as string}
                        render={({ field: { onChange, value } }) => (
                            <View style={{ marginBottom: 15 }}>
                                <TextInput
                                    placeholder={placeholder}
                                    value={value?.toString()}
                                    onChangeText={onChange}
                                    style={{ borderWidth: 1, padding: 8 }}
                                />
                            </View>
                        )}
                    />
                );
            }
            case FormFieldType.picker: {
                return (
                    <Controller
                        key={key}
                        control={control}
                        name={fieldName as string}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.fieldContainer}>
                                <Text style={styles.label}>{placeholder}</Text>
                                <List.Accordion
                                    title={selected[fieldName] || "Select an option"}
                                    style={styles.dropdownContainer}
                                    expanded={expanded[key]}
                                    onPress={() => toggleExpand(key)}
                                >
                                    {options?.map((option: any) => (
                                        <List.Item
                                            key={option.value.toString()}
                                            title={option.label}
                                            onPress={() => handleSelect(fieldName, option.value, onChange)}
                                        />
                                    ))}
                                </List.Accordion>
                            </View>
                        )}
                    />
                );
            }
            case FormFieldType.object: {
                return (
                    <View key={key} style={[styles.sectionContainer, { backgroundColor: getBackgroundColor(key, depth) }]}>
                        <TouchableOpacity onPress={() => toggleExpand(key)}>
                            <Text style={[styles.sectionTitle, expanded[key] ? styles.expandedTitle : styles.collapsedTitle]}>
                                {placeholder} {expanded[key] ? '-' : '+'}
                            </Text>
                        </TouchableOpacity>

                        {expanded[key] && (
                            <View style={{ paddingLeft: 10 }}>
                                {subfields?.map((subfield: any) => renderField(subfield, depth + 1, fieldName))}
                            </View>
                        )}
                    </View>
                );
            }
            case FormFieldType.array: {
                const array = fieldArrayMap[name];
                if (!array) return null;
                const { fields, append, remove } = array;

                return (
                    <View key={key} style={[styles.sectionContainer, { backgroundColor: getBackgroundColor(key, depth) }]}>
                        <TouchableOpacity onPress={() => toggleExpand(key)}>
                            <Text style={[styles.sectionTitle, expanded[key] ? styles.expandedTitle : styles.collapsedTitle]}>
                                {placeholder} {expanded[key] ? '-' : '+'}
                            </Text>
                        </TouchableOpacity>

                        {expanded[key] && (
                            <View style={{ paddingLeft: 10 }}>
                                {fields.map((item, index) => (
                                    <View key={item.id} style={styles.arrayItemContainer}>
                                        {subfields?.map((subfield: any) =>
                                            renderField(subfield, depth + 1, `${fieldName}.${index}`) // Корректное имя для каждого элемента массива
                                        )}
                                        <Button title="Remove" onPress={() => remove(index)} />
                                    </View>
                                ))}
                                <Button title={`Add ${placeholder}`} onPress={() => append(getDefaultValues(name))} />
                            </View>
                        )}
                    </View>
                );
            }
            default:
                return null;
        }
    };

    // Оптимизированная функция для рендеринга полей
    const getBackgroundColor = (key: string, depth: number) => {
        const isExpanded = expanded[key];
        const isActive = activeSection === key;
        return isActive
            ? `rgba(208, 193, 218, ${1 - depth * 0.2})`
            : `rgba(208, 193, 218, ${0.5 - depth * 0.1})`;
    };

    // Функция для получения имени родителя
    const nameForParent = (fieldName: string) => {
        return fieldName;
    };

    useEffect(() => {
        reset(defaultFormFields);
    }, [defaultFormFields, reset]);
    
    return (
        <View>
            <View style={{ padding: 20 }}>
                {paymentInfoList.map((field) => renderField(field))}
            </View>
            {/*
             Динамическое управление items
            <Text>Items</Text>
            {itemsFields.map((item, index) => (
                <View key={item.id}>
                    <Controller
                        control={control}
                        name={`ReceiptData.items.${index}.name`}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                                placeholder="Item Name"
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    
                     Поля для остальных свойств items (price, quantity и т.д.)
                    <Controller
                        control={control}
                        name={`ReceiptData.items.${index}.price`}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                                placeholder="Price"
                                value={String(value)}
                                onChangeText={onChange}
                                keyboardType="numeric"
                            />
                        )}
                    />
                    
                    <Button title="Remove Item" onPress={() => removeItem(index)} />
                </View>
            ))}
            */}
            {/*<Button title="Add Item" onPress={() => appendItem({ name: '', price: 0, quantity: 1 })} />*/}
            
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export default DynamicForm;

const styles = StyleSheet.create({
    inputWrapper: {
        gap: 4,
    },
    inputContainer: {
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    inputTittleWrapper: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputFiledStyles: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    openedSectionWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginVertical: 20,
        backgroundColor: Colors.section,
    },
    sectionContainer: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
    },
    arrayItemContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    expandedTitle: {
        color: Colors.text,
    },
    collapsedTitle: {
        color: Colors.text,
    },
    container: {
        padding: 20,
    },
    fieldContainer: {
        marginBottom: 15,
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
})