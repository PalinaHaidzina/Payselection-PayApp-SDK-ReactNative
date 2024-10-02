import { FormFieldType } from "@/constants/formFielsLists/commonTypes";
import {
    AgentInfoTypeHandbook,
    booleanHandbook,
    PaymentMethodTypeHandbook, PaymentObjectFFD1_05, PaymentsTypeHandbook,
    SnoHandbook, VatTypeHandbook,
} from "@/constants/formFielsLists/handbook";

export const paymentInfoList = [
    {
        type: FormFieldType.input,
        name: "PaymentMethod",
        placeholder: "PaymentMethod",
        key: "payment-method",
    },
    {
        type: FormFieldType.input,
        name: "PaymentDetails.Value",
        placeholder: "Value",
        key: "payment-details",
    },
    {
        type: FormFieldType.input,
        name: "OrderId",
        placeholder: "Order Id",
        key: "order-id",
    },
    {
        type: FormFieldType.input,
        name: "Amount",
        placeholder: "Amount",
        key: "amount",
    },
    {
        type: FormFieldType.input,
        name: "Currency",
        placeholder: "Currency",
        key: "currency",
    },
    {
        type: FormFieldType.input,
        name: "Description",
        placeholder: "Description",
        key: "description",
    },
    {
        type: FormFieldType.picker,
        name: "RebillFlag",
        placeholder: "Rebill Flag",
        key: "rebill-flag",
        options: booleanHandbook,
    },

    {
        type: FormFieldType.object,
        name: "CustomerInfo",
        placeholder: "Customer Info",
        key: "customer-info",
        subfields: [
            {
                type: FormFieldType.input,
                name: "CustomerInfo.Email",
                placeholder: "Email",
                key: "customer-info-email",
            },
            {
                type: FormFieldType.input,
                name: "CustomerInfo.ReceiptEmail",
                placeholder: "ReceiptEmail",
                key: "customer-info-receipt-email",
            },
            {
                type: FormFieldType.input,
                name: "CustomerInfo.IsSendReceipt",
                placeholder: "IsSendReceipt",
                key: "customer-info-is-send-receipt",
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
        ]
    },

    {
        type: FormFieldType.object,
        name: "ExtraData",
        placeholder: "Extra Data",
        key: "extra-data",
        subfields: [
            {
                type: FormFieldType.input,
                name: "ExtraData.ReturnUrl",
                placeholder: "Return url",
                key: "extra-data-return-url",
            },
            {
                type: FormFieldType.input,
                name: "ExtraData.WebhookUrl",
                placeholder: "Webhook url",
                key: "extra-data-webhook",
            },
            {
                type: FormFieldType.input,
                name: "ExtraData.ScreenHeight",
                placeholder: "Screen height",
                key: "extra-data-screen-height",
            },
            {
                type: FormFieldType.input,
                name: "ExtraData.ScreenWidth",
                placeholder: "Screen width",
                key: "extra-data-screen-width",
            },
            {
                type: FormFieldType.input,
                name: "ExtraData.ChallengeWindowSize",
                placeholder: "Challenge window size",
                key: "extra-data-challenge-window-size",
            },
            {
                type: FormFieldType.input,
                name: "ExtraData.TimeZoneOffset",
                placeholder: "Timezone offset",
                key: "extra-data-time-zone-offset",
            },
            {
                type: FormFieldType.input,
                name: "ExtraData.ColorDepth",
                placeholder: "Color depth",
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
                placeholder: "User agent",
                key: "extra-data-user-agent",
            },
            {
                type: FormFieldType.input,
                name: "ExtraData.acceptHeader",
                placeholder: "Accept header",
                key: "extra-data-accept-header",
            },
            {
                type: FormFieldType.picker,
                name: "ExtraData.JavaEnabled",
                placeholder: "Java enabled",
                key: "extra-data-Java-enabled",
                options: booleanHandbook
            },
            {
                type: FormFieldType.picker,
                name: "ExtraData.javaScriptEnabled",
                placeholder: "JavaScript enabled",
                key: "extra-data-java-script-enabled",
                options: booleanHandbook
            },
        ]
    },

    {
        type: FormFieldType.object,
        name: "ReceiptData",
        placeholder: "Receipt Data",
        key: "receipt-data",
        subfields: [
            {
                type: FormFieldType.input,
                name: "ReceiptData.timestamp",
                placeholder: "Timestamp",
                key: "receipt-data-timestamp",
            },
            {
                type: FormFieldType.input,
                name: "ReceiptData.external_id",
                placeholder: "External id",
                key: "receipt-data-external-id",
            },
            {
                type: FormFieldType.object,
                name: "receipt",
                placeholder: "receipt",
                key: "receipt",
                subfields: [
                    {
                        type: FormFieldType.object,
                        name: "client",
                        placeholder: "Client",
                        key: "client",
                        subfields: [
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.client.name",
                                placeholder: "Name",
                                key: "receipt-client-name",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.client.inn",
                                placeholder: "INN",
                                key: "receipt-client-inn",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.client.email",
                                placeholder: "Email",
                                key: "receipt-client-email",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.client.phone",
                                placeholder: "Phone",
                                key: "receipt-client-phone",
                            },
                        ],
                    },
                    {
                        type: FormFieldType.object,
                        name: "company",
                        placeholder: "company",
                        key: "company",
                        subfields: [
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.company.email",
                                placeholder: "Email",
                                key: "receipt-company-email",
                            },
                            {
                                type: FormFieldType.picker,
                                name: "ReceiptData.receipt.company.sno",
                                placeholder: "SNO",
                                key: "receipt-company-sno",
                                options: SnoHandbook,
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.company.inn",
                                placeholder: "INN",
                                key: "receipt-company-inn",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.company.payment_address",
                                placeholder: "Payment address",
                                key: "receipt-company-payment_address",
                            },
                        ],
                    },
                    {
                        type: FormFieldType.object,
                        name: "AgentInfo",
                        placeholder: "AgentInfo",
                        key: "agent-info",
                        subfields: [
                            {
                                type: FormFieldType.picker,
                                name: "ReceiptData.receipt.agent_info.type",
                                placeholder: "Type",
                                key: "receipt-agent_info-type",
                                options: AgentInfoTypeHandbook,
                            },
                            {
                                type: FormFieldType.object,
                                name: "Paying Agent",
                                placeholder: "Paying Agent",
                                key: "paying-agent",
                                subfields: [
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.agent_info.paying_agent.operation",
                                        placeholder: "Operation",
                                        key: "receipt-agent-info-paying-agent-operation",
                                    },
                                    {
                                        type: FormFieldType.array,
                                        name: "ReceiptData.receipt.agent_info.paying_agent.phones",
                                        placeholder: "Phones",
                                        key: "receipt-agent-info-paying-agent-phones",
                                        subfields: [
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.agent_info.paying_agent.phone",
                                                placeholder: "Phone",
                                                key: "receipt-agent-info-paying-agent-phone",
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                type: FormFieldType.object,
                                name: "Receive payment operator",
                                placeholder: "Receive payment operator",
                                key: "receive-payment-operator",
                                subfields: [
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.agent_info.receive_payments_operator.phones",
                                        placeholder: "Phones",
                                        key: "receipt-agent-info-receive-payments-operator-phones",
                                    },
                                ]
                            },
                            {
                                type: FormFieldType.object,
                                name: "Money transfer operator",
                                placeholder: "Money transfer operator",
                                key: "money-transfer-operator",
                                subfields: [
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.agent_info.money_transfer_operator.phones",
                                        placeholder: "Phones",
                                        key: "receipt-agent_info.money-transfer-operator-phones",
                                    },
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.agent_info.money_transfer_operator.name",
                                        placeholder: "Name",
                                        key: "receipt-agent_info.money-transfer-operator-names",
                                    },
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.agent_info.money_transfer_operator.address",
                                        placeholder: "Address",
                                        key: "receipt-agent_info.money-transfer-operator-address",
                                    },
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.agent_info.money_transfer_operator.inn",
                                        placeholder: "INN",
                                        key: "receipt-agent_info.money-transfer-operator-inn",
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        type: FormFieldType.object,
                        name: "supplier_info",
                        placeholder: "Supplier info",
                        key: "supplier_info",
                        subfields: [
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.supplier_info.phones",
                                placeholder: "Phones",
                                key: "receipt-supplier-info-phones",
                            },
                        ]
                    },
                    {
                        type: FormFieldType.array,
                        name: "ReceiptData.receipt.items",
                        placeholder: "Items",
                        key: "items",
                        subfields: [
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.name",
                                placeholder: "Name",
                                key: "receipt-items-name",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.price",
                                placeholder: "Price",
                                key: "receipt-items-price",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.quantity",
                                placeholder: "Quantity",
                                key: "receipt-items-quantity",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.sum",
                                placeholder: "Sum",
                                key: "receipt-items-sum",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.measurement_unit",
                                placeholder: "Measurement unit",
                                key: "receipt-items-measurement_unit",
                            },
                            {
                                type: FormFieldType.picker,
                                name: "ReceiptData.receipt.items.payment_method",
                                placeholder: "Payment method",
                                key: "receipt-items-payment-method",
                                options: PaymentMethodTypeHandbook,
                            },
                            {
                                type: FormFieldType.picker,
                                name: "ReceiptData.receipt.items.payment_object",
                                placeholder: "Payment object",
                                key: "receipt-items-payment-object",
                                options: PaymentObjectFFD1_05,
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.nomenclature_code",
                                placeholder: "Nomenclature code",
                                key: "receipt-items-nomenclature-code",
                                options: PaymentObjectFFD1_05,
                            },
                            {
                                type: FormFieldType.object,
                                name: "vat",
                                placeholder: "Vat",
                                key: "items-vat",
                                subfields: [
                                    {
                                        type: FormFieldType.picker,
                                        name: "ReceiptData.receipt.items.vat.type",
                                        placeholder: "Type",
                                        key: "receipt-items-vat-type",
                                        options: VatTypeHandbook,
                                    },
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.items.vat.sum",
                                        placeholder: "Sum",
                                        key: "receipt-items-vat-sum",
                                    },
                                ],
                            },
                            {
                                type: FormFieldType.object,
                                name: "agent info",
                                placeholder: "Agent info",
                                key: "items-agent_info",
                                subfields: [
                                    {
                                        type: FormFieldType.picker,
                                        name: "ReceiptData.receipt.items.agent_info.type",
                                        placeholder: "Type",
                                        key: "receipt-items-agent-info-type",
                                        options: AgentInfoTypeHandbook,
                                    },
                                    {
                                        type: FormFieldType.object,
                                        name: "paying agent",
                                        placeholder: "Paying agent",
                                        key: "items-paying-agent",
                                        subfields: [
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.items.agent_info.paying_agent.operation",
                                                placeholder: "Paying agent",
                                                key: "receipt-items-operation-info-paying-agent-operation",
                                            },
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.items.agent_info.paying_agent.phones",
                                                placeholder: "Phones",
                                                key: "receipt-items-operation-info-paying-agent-phones",
                                            },
                                        ],
                                    },
                                    {
                                        type: FormFieldType.object,
                                        name: "receive_payments_operator",
                                        placeholder: "Receive payments operator",
                                        key: "items-agent-info-receive_payments_operator",
                                        subfields: [
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.items.agent_info.receive_payments_operator.phones",
                                                placeholder: "Phones",
                                                key: "receipt-items-operation-info-receive-payments-operator-phones",
                                            },
                                        ],
                                    },
                                    {
                                        type: FormFieldType.object,
                                        name: "money transfer operator",
                                        placeholder: "money transfer operator",
                                        key: "items-agent-info-money-transfer-operator",
                                        subfields: [
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.phones",
                                                placeholder: "Phones",
                                                key: "receipt-items-agent-info-money-transfer-operator-phones",
                                            },
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.name",
                                                placeholder: "Name",
                                                key: "receipt-items-agent-info-money-transfer-operator-name",
                                            },
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.address",
                                                placeholder: "Address",
                                                key: "receipt-items-agent-info-money-transfer-operator-address",
                                            },
                                            {
                                                type: FormFieldType.input,
                                                name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.inn",
                                                placeholder: "INN",
                                                key: "receipt-items-agent-info-money-transfer-operator-inn",
                                            },
                                        ],
                                    }
                                ],
                            },
                            {
                                type: FormFieldType.object,
                                name: "ItemsSupplierInfo",
                                placeholder: "Items Supplier Info",
                                key: "items-supplier-info",
                                subfields: [
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.items.supplier_info.phones",
                                        placeholder: "Phones",
                                        key: "receipt-items-supplier-info-phones",
                                    },
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.items.supplier_info.name",
                                        placeholder: "Name",
                                        key: "receipt-items-supplier-info-name",
                                    },
                                    {
                                        type: FormFieldType.input,
                                        name: "ReceiptData.receipt.items.supplier_info.inn",
                                        placeholder: "INN",
                                        key: "receipt-items-supplier-info-inn",
                                    },
                                ]
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.user_data",
                                placeholder: "User data",
                                key: "receipt-items-user-data",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.excise",
                                placeholder: "Excise",
                                key: "receipt-items-excise",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.country_code",
                                placeholder: "Country code",
                                key: "receipt-items-country-code",
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.items.declaration_number",
                                placeholder: "Declaration number",
                                key: "receipt-items-country-declaration-number",
                            },
                        ],
                    },
                    {
                        type: FormFieldType.array,
                        name: "ReceiptData.receipt.payments",
                        placeholder: "payments",
                        key: "payments",
                        subfields: [
                            {
                                type: FormFieldType.picker,
                                name: "ReceiptData.receipt.payments.type",
                                placeholder: "Type",
                                key: "receipt-payments.type",
                                options: PaymentsTypeHandbook,
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.payments.sum",
                                placeholder: "Sum",
                                key: "receipt-payments-sum",
                            },
                        ]
                    },
                    {
                        type: FormFieldType.object,
                        name: "vats",
                        placeholder: "vats",
                        key: "payment-vats",
                        subfields: [
                            {
                                type: FormFieldType.picker,
                                name: "ReceiptData.receipt.vats.type",
                                placeholder: "Type",
                                key: "receipt-vats-type",
                                options: VatTypeHandbook,
                            },
                            {
                                type: FormFieldType.input,
                                name: "ReceiptData.receipt.vats.sum",
                                placeholder: "Sum",
                                key: "receipt-vats-sum",
                            },
                        ]
                    },
                    {
                        type: FormFieldType.input,
                        name: "ReceiptData.receipt.total",
                        placeholder: "Total",
                        key: "receipt-total",
                    },
                    {
                        type: FormFieldType.input,
                        name: "ReceiptData.receipt.additional_check_props",
                        placeholder: "Additional check props",
                        key: "receipt-additional-check-props",
                    },
                    {
                        type: FormFieldType.input,
                        name: "ReceiptData.receipt.cashier",
                        placeholder: "Cashier",
                        key: "receipt-cashier",
                    },
                    {
                        type: FormFieldType.input,
                        name: "ReceiptData.receipt.additional_user_props.name",
                        placeholder: "Name",
                        key: "receipt-additional-user-props-name",
                    },
                    {
                        type: FormFieldType.input,
                        name: "ReceiptData.receipt.additional_user_props.value",
                        placeholder: "Value",
                        key: "receipt-additional-user-props-value",
                    },
                ]
            }
        ]
    }

]



/*const renderField = (field: any, depth: number = 0, parentName: string = '') => {
    const { type, name, placeholder, key, options, subfields } = field;

    const isExpanded = expanded[key];
    const isActive = activeSection === key;
    const backgroundColor = isActive
        ? `rgba(208, 193, 218, ${1 - depth * 0.2})`
        : `rgba(208, 193, 218, ${0.5 - depth * 0.1})`;


    switch (type) {
        case FormFieldType.input: {
            return (
                <Controller
                    key={key}
                    control={control}
                    name={name as keyof CryptogramPayment}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 15 }}>
                            <TextInput
                                label={placeholder}
                                value={value?.toString()}
                                onChangeText={onChange}
                            />
                        </View>
                    )}
                />
            );
        }
        case FormFieldType.picker: {
            return (
                <View key={key} style={styles.fieldContainer}>
                    <Controller
                        control={control}
                        name={name}
                        render={({ field: { onChange, value } }) => (
                            <View>
                                <Text style={styles.label}>{placeholder}</Text>
                                <List.Accordion
                                    title={selected[name] || "Select an option"}
                                    style={styles.dropdownContainer}
                                    expanded={expanded[key]}
                                    onPress={() => toggleExpand(key)}
                                >
                                    {options?.map((option: any) => (
                                        <List.Item
                                            key={option.value.toString()}
                                            title={option.label}
                                            onPress={() => handleSelect(name, option.value, onChange)}
                                        />
                                    ))}
                                </List.Accordion>
                            </View>
                        )}
                    />
                </View>
            );
        }
        case FormFieldType.object: {
            return (
                <View key={key} style={[styles.sectionContainer, { backgroundColor }]}>
                    <TouchableOpacity onPress={() => toggleExpand(key)}>
                        <Text style={[styles.sectionTitle, isExpanded ? styles.expandedTitle : styles.collapsedTitle]}>
                            {placeholder} {isExpanded ? '-' : '+'}
                        </Text>
                    </TouchableOpacity>

                    {isExpanded && (
                        <View>
                            {subfields?.map((subfield: any) => renderField(subfield, depth + 1))}
                        </View>
                    )}
                </View>
            );
        }
        case FormFieldType.array: {
            return (
                <View key={key} style={[styles.sectionContainer, { backgroundColor }]}>
                    <TouchableOpacity onPress={() => toggleExpand(key)}>
                        <Text style={[styles.sectionTitle, isExpanded ? styles.expandedTitle : styles.collapsedTitle]}>
                            {placeholder} {isExpanded ? '-' : '+'}
                        </Text>
                    </TouchableOpacity>

                    {isExpanded && (
                        <View>
                            {fields.map((item, index) => (
                                <View key={item.id} style={styles.arrayItemContainer}>
                                    {subfields.map((subfield: any) => renderField(subfield, depth + 1, `ReceiptData.items.${index}`))}
                                    <Button title="Remove Item" onPress={() => remove(index)} />
                                </View>
                            ))}

                            <Button title="Add Item" onPress={() => append({ name: '', price: '', quantity: '', sum: '', vat: { type: '', sum: '' } })} />
                        </View>
                    )}
                </View>
            );
        }
        default: return null;
    }
};*/