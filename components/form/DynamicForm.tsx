import { fieldsList } from "@/constants/fieldList";
import { FormFieldType } from "@/constants/formFielsLists/commonTypes";
import { defaultPaymentPayloadValues } from "@/constants/formFielsLists/formDefaultValues";
import { Picker } from "@react-native-picker/picker";
import { CryptogramPayment } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { TextInput, View, Text, Button } from "react-native";

const DynamicForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: defaultPaymentPayloadValues
    });
    
    /*const { fields: itemsFields, append: appendItem, remove: removeItem } = useFieldArray({
        control,
        name: 'ReceiptData.receipt.items',  // Динамическое управление items
    });*/
    
    const onSubmit = (data: CryptogramPayment) => {
        console.log(data);
    };
    
    return (
        <View>
            {fieldsList.map((field) => {
                const { type, name, placeholder, key, options } = field;
                
                switch (type) {
                    case FormFieldType.input:
                        return (
                            <Controller
                                key={key}
                                control={control}
                                name={name as keyof CryptogramPayment}
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                                        placeholder={placeholder}
                                        value={typeof value === 'string' ? value : String(value)}
                                        onChangeText={onChange}
                                    />
                                )}
                            />
                        );
                        
                        case FormFieldType.picker:
                        return (
                            <View key={key} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}>
                                <Controller
                                    control={control}
                                    name={name as keyof CryptogramPayment}
                                    render={({ field: { onChange, value } }) => (
                                        <Picker
                                            selectedValue={value}
                                            onValueChange={(itemValue) => onChange(itemValue)}
                                        >
                                            {options?.map((option) => (
                                                <Picker.Item
                                                    key={option.value.toString()}
                                                    label={option.label}
                                                    value={option.value}
                                                />
                                            ))}
                                        </Picker>
                                    )}
                                />
                            </View>
                        );
                        
                        case FormFieldType.subTitle:
                        return (
                            <Text key={key} style={{ fontWeight: 'bold', marginVertical: 10 }}>
                                {name}
                            </Text>
                        );
                    
                    default:
                        return null;
                }
            })}
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