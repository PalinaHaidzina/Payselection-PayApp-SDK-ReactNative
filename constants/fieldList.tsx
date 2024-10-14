import {
    AgentInfoTypeHandbook,
    booleanHandbook,
    PaymentMethodTypeHandbook,
    PaymentObjectFFD1_05,
    PaymentObjectFFD1_2Handbook, PaymentsTypeHandbook,
    SnoHandbook,
    VatTypeHandbook
} from "@/constants/formFielsLists/handbook";

export interface Field {
    name: string;
    key: string;
    placeholder?: string;
    fieldType: string;
    subfields?: Field[];
    options?: { label: string; value: string | number | boolean }[];
    isMulti?: boolean;
    isNumeric?: boolean;
}

export const fieldsFFD1_05: Field[] = [
    {
        fieldType: "text",
        name: "PaymentMethod",
        placeholder: "Enter Payment Method",
        key: "PaymentMethod",
    },
    {
        fieldType: "group",
        name: "PaymentDetails",
        key: "PaymentDetails",
        subfields: [
            {
                fieldType: "text",
                name: "Value",
                placeholder: "Value",
                key: "PaymentDetails.Value",
            },
            {
                fieldType: "text",
                name: "Type",
                placeholder: "Type",
                key: "PaymentDetails.Type",
            },
            {
                fieldType: "text",
                name: "PayToken",
                placeholder: "PayToken",
                key: "PaymentDetails.PayToken",
            },
        ]
    },
    {
        name: "Order ID",
        key: "OrderId",
        placeholder: "Enter Order ID",
        fieldType: "text",
    },
    {
        name: "Amount",
        key: "Amount",
        placeholder: "Enter Amount",
        fieldType: "text",
    },
    {
        name: "Currency",
        key: "Currency",
        placeholder: "Enter Currency",
        fieldType: "text",
    },
    {
        name: "Description",
        key: "Description",
        placeholder: "Enter Description",
        fieldType: "text",
    },
    {
        name: "RebillFlag",
        key: "RebillFlag",
        placeholder: "Enter RebillFlag",
        fieldType: "picker",
        options: booleanHandbook,
    },
    {
        name: "Customer Info",
        key: "CustomerInfo",
        fieldType: "group",
        subfields: [
            {
                name: "Email",
                key: "CustomerInfo.Email",
                placeholder: "Enter Email",
                fieldType: "text",
            },
            {
                name: "ReceiptEmail",
                key: "CustomerInfo.ReceiptEmail",
                placeholder: "Enter Receipt Email",
                fieldType: "text",
            },
            {
                name: "IsSendReceipt",
                key: "CustomerInfo.IsSendReceipt",
                placeholder: "Enter Is Send Receipt",
                fieldType: "picker",
                options: booleanHandbook,
            },
            {
                name: "Phone",
                key: "CustomerInfo.Phone",
                placeholder: "Enter Phone",
                fieldType: "text",
            },
            {
                name: "Language",
                key: "CustomerInfo.Language",
                placeholder: "Enter Language",
                fieldType: "text",
            },
            {
                name: "Address",
                key: "CustomerInfo.Address",
                placeholder: "Enter Address",
                fieldType: "text",
            },
            {
                name: "Town",
                key: "CustomerInfo.Town",
                placeholder: "Enter Town",
                fieldType: "text",
            },
            {
                name: "ZIP",
                key: "CustomerInfo.ZIP",
                placeholder: "Enter ZIP",
                fieldType: "text",
            },
            {
                name: "Country",
                key: "CustomerInfo.Country",
                placeholder: "Enter Country",
                fieldType: "text",
            },
            {
                name: "IP",
                key: "CustomerInfo.IP",
                placeholder: "Enter IP",
                fieldType: "text",
            },
            {
                name: "UserId",
                key: "CustomerInfo.UserId",
                placeholder: "Enter User Id",
                fieldType: "text",
            },
        ],
    },
    {
        name: "ExtraData",
        key: "ExtraData",
        fieldType: "group",
        subfields: [
            {
                name: "ReturnUrl",
                key: "ExtraData.ReturnUrl",
                placeholder: "Enter Return Url",
                fieldType: "text",
            },
            {
                name: "ReturnUrl",
                key: "ExtraData.WebhookUrl",
                placeholder: "Enter Webhook Url",
                fieldType: "text",
            },
            {
                name: "ScreenHeight",
                key: "ExtraData.ScreenHeight",
                placeholder: "Enter Screen Height",
                fieldType: "text",
            },
            {
                name: "ScreenWidth",
                key: "ExtraData.ScreenWidth",
                placeholder: "Enter Screen Width",
                fieldType: "text",
            },
            {
                name: "ChallengeWindowSize",
                key: "ExtraData.ChallengeWindowSize",
                placeholder: "Enter Screen Challenge Window Size",
                fieldType: "text",
            },
            {
                name: "TimeZoneOffset",
                key: "ExtraData.TimeZoneOffset",
                placeholder: "Enter Time Zone Offset",
                fieldType: "text",
            },
            {
                name: "ColorDepth",
                key: "ExtraData.ColorDepth",
                placeholder: "Enter Color Depth",
                fieldType: "text",
            },
            {
                name: "Region",
                key: "ExtraData.Region",
                placeholder: "Enter Region",
                fieldType: "text",
            },
            {
                name: "UserAgent",
                key: "ExtraData.UserAgent",
                placeholder: "Enter User Agent",
                fieldType: "text",
            },
            {
                name: "acceptHeader",
                key: "ExtraData.acceptHeader",
                placeholder: "Enter accept Header",
                fieldType: "text",
            },
            {
                name: "JavaEnabled",
                key: "ExtraData.JavaEnabled",
                placeholder: "Enter Java Enabled",
                fieldType: "picker",
                options: booleanHandbook,
            },
            {
                name: "javaScriptEnabled",
                key: "ExtraData.javaScriptEnabled",
                placeholder: "Enter java Script Enabled",
                fieldType: "picker",
                options: booleanHandbook,
            },
        ],
    },
    {
        name: "ReceiptData",
        key: "ReceiptData",
        fieldType: "group",
        subfields: [
            {
                name: "timestamp",
                key: "ReceiptData.timestamp",
                placeholder: "Enter timestamp",
                fieldType: "text",
            },
            {
                name: "external_id",
                key: "ReceiptData.external_id",
                placeholder: "Enter external id",
                fieldType: "text",
            },
            {
                name: "receipt",
                key: "ReceiptData.receipt",
                fieldType: "group",
                subfields: [
                    {
                        name: "client",
                        key: "ReceiptData.receipt.client",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "name",
                                key: "ReceiptData.receipt.client.name",
                                placeholder: "Enter external name",
                                fieldType: "text",
                            },
                            {
                                name: "inn",
                                key: "ReceiptData.receipt.client.inn",
                                placeholder: "Enter external inn",
                                fieldType: "text",
                            },
                            {
                                name: "email",
                                key: "ReceiptData.receipt.client.email",
                                placeholder: "Enter external email",
                                fieldType: "text",
                            },
                            {
                                name: "phone",
                                key: "ReceiptData.receipt.client.phone",
                                placeholder: "Enter external phone",
                                fieldType: "text",
                            },
                        ]
                    },
                    {
                        name: "company",
                        key: "ReceiptData.receipt.company",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "email",
                                key: "ReceiptData.receipt.company.email",
                                placeholder: "Enter email",
                                fieldType: "text",
                            },
                            {
                                name: "sno",
                                key: "ReceiptData.receipt.company.sno",
                                placeholder: "Enter sno",
                                fieldType: "picker",
                                options: SnoHandbook,
                            },
                            {
                                name: "inn",
                                key: "ReceiptData.receipt.company.inn",
                                placeholder: "Enter inn",
                                fieldType: "text",
                            },
                            {
                                name: "payment_address",
                                key: "ReceiptData.receipt.company.payment_address",
                                placeholder: "Enter payment_address",
                                fieldType: "text",
                            },
                        ]
                    },
                    {
                        name: "agent_info",
                        key: "ReceiptData.receipt.agent_info",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "type",
                                key: "ReceiptData.receipt.agent_info.type",
                                placeholder: "Enter type",
                                fieldType: "picker",
                                options: AgentInfoTypeHandbook,
                            },
                            {
                                name: "paying_agent",
                                key: "ReceiptData.receipt.agent_info.paying_agent",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "operation",
                                        key: "ReceiptData.receipt.agent_info.paying_agent.operation",
                                        placeholder: "Enter operation",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "phones",
                                        key: "ReceiptData.receipt.agent_info.paying_agent.phones",
                                        placeholder: "Enter phones",
                                        fieldType: "text",
                                        isMulti: true,
                                    },
                                ],
                            },
                            {
                                name: "receive_payments_operator",
                                key: "ReceiptData.receipt.agent_info.receive_payments_operator",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "phones",
                                        key: "ReceiptData.receipt.agent_info.receive_payments_operator.phones",
                                        placeholder: "Enter phones",
                                        fieldType: "text",
                                        isMulti: true,
                                    },
                                ],
                            },
                            {
                                name: "money_transfer_operator",
                                key: "ReceiptData.receipt.agent_info.money_transfer_operator",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "phones",
                                        key: "ReceiptData.receipt.agent_info.money_transfer_operator.phones",
                                        placeholder: "Enter phones",
                                        fieldType: "text",
                                        isMulti: true,
                                    },
                                    {
                                        name: "name",
                                        key: "ReceiptData.receipt.agent_info.money_transfer_operator.name",
                                        placeholder: "Enter name",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "address",
                                        key: "ReceiptData.receipt.agent_info.money_transfer_operator.address",
                                        placeholder: "Enter address",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "inn",
                                        key: "ReceiptData.receipt.agent_info.money_transfer_operator.inn",
                                        placeholder: "Enter inn",
                                        fieldType: "text",
                                    }
                                ],
                            },
                        ]
                    },
                    {
                        name: "supplier_info",
                        key: "ReceiptData.receipt.supplier_info",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "phones",
                                key: "ReceiptData.receipt.supplier_info.phones",
                                placeholder: "Enter phones",
                                fieldType: "text",
                                isMulti: true,
                            },
                        ]
                    },
                    {
                        name: "items",
                        key: "ReceiptData.receipt.items",
                        fieldType: "array",
                        subfields: [
                            {
                                name: "name",
                                key: "ReceiptData.receipt.items.name",
                                placeholder: "Enter name",
                                fieldType: "text",
                            },
                            {
                                name: "price",
                                key: "ReceiptData.receipt.items.price",
                                placeholder: "Enter price",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "quantity",
                                key: "ReceiptData.receipt.items.quantity",
                                placeholder: "Enter quantity",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "sum",
                                key: "ReceiptData.receipt.items.sum",
                                placeholder: "Enter sum",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "measurement_unit",
                                key: "ReceiptData.receipt.items.measurement_unit",
                                placeholder: "Enter measurement unit",
                                fieldType: "text",
                            },
                            {
                                name: "payment_method",
                                key: "ReceiptData.receipt.items.payment_method",
                                placeholder: "Enter payment method",
                                fieldType: "picker",
                                options: PaymentMethodTypeHandbook,
                            },
                            {
                                name: "payment_object",
                                key: "ReceiptData.receipt.items.payment_object",
                                placeholder: "Enter payment object",
                                fieldType: "picker",
                                options: PaymentObjectFFD1_05,

                            },
                            {
                                name: "nomenclature_code",
                                key: "ReceiptData.receipt.items.nomenclature_code",
                                placeholder: "Enter nomenclature code",
                                fieldType: "text",
                            },
                            {
                                name: "vat",
                                key: "ReceiptData.receipt.items.vat",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "type",
                                        key: "ReceiptData.receipt.items.vat.type",
                                        placeholder: "Enter type",
                                        fieldType: "picker",
                                        options: VatTypeHandbook,

                                    },
                                    {
                                        name: "sum",
                                        key: "ReceiptData.receipt.items.vat.sum",
                                        placeholder: "Enter sum",
                                        fieldType: "text",
                                        isNumeric: true,
                                    },
                                ]
                            },
                            {
                                name: "agent_info",
                                key: "ReceiptData.receipt.items.agent_info",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "type",
                                        key: "ReceiptData.receipt.items.agent_info.type",
                                        placeholder: "Enter type",
                                        fieldType: "picker",
                                        options: AgentInfoTypeHandbook,
                                    },
                                    {
                                        name: "paying_agent",
                                        key: "ReceiptData.receipt.items.agent_info.paying_agent",
                                        fieldType: "group",
                                        subfields: [
                                            {
                                                name: "operation",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.operation",
                                                placeholder: "Enter operation",
                                                fieldType: "text",
                                            },
                                            {
                                                name: "phones",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.phones",
                                                placeholder: "Enter phones",
                                                fieldType: "text",
                                                isMulti: true,
                                            },
                                        ]
                                    },
                                    {
                                        name: "receive_payments_operator",
                                        key: "ReceiptData.receipt.items.agent_info.paying_agent.receive_payments_operator",
                                        fieldType: "group",
                                        subfields: [
                                            {
                                                name: "phones",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.receive_payments_operator.phones",
                                                placeholder: "Enter phones",
                                                fieldType: "text",
                                                isMulti: true,
                                            },
                                        ]
                                    },
                                    {
                                        name: "money_transfer_operator",
                                        key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator",
                                        fieldType: "group",
                                        subfields: [
                                            {
                                                name: "phones",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.phones",
                                                placeholder: "Enter phones",
                                                fieldType: "text",
                                                isMulti: true,
                                            },
                                            {
                                                name: "name",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.name",
                                                placeholder: "Enter name",
                                                fieldType: "text",
                                            },
                                            {
                                                name: "address",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.address",
                                                placeholder: "Enter address",
                                                fieldType: "text",
                                            },
                                            {
                                                name: "inn",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.inn",
                                                placeholder: "Enter inn",
                                                fieldType: "text",
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                name: "supplier_info",
                                key: "ReceiptData.receipt.items.supplier_info",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "phones",
                                        key: "ReceiptData.receipt.items.supplier_info.phones",
                                        placeholder: "Enter phones",
                                        fieldType: "text", //multiply
                                    },
                                    {
                                        name: "name",
                                        key: "ReceiptData.receipt.items.supplier_info.name",
                                        placeholder: "Enter name",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "inn",
                                        key: "ReceiptData.receipt.items.supplier_info.inn",
                                        placeholder: "Enter inn",
                                        fieldType: "text",
                                    },
                                ],
                            },
                            {
                                name: "user_data",
                                key: "ReceiptData.receipt.items.user_data",
                                placeholder: "Enter user_data",
                                fieldType: "text",
                            },
                            {
                                name: "excise",
                                key: "ReceiptData.receipt.items.excise",
                                placeholder: "Enter excise",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "country_code",
                                key: "ReceiptData.receipt.items.country_code",
                                placeholder: "Enter country_code",
                                fieldType: "text",
                            },
                            {
                                name: "declaration_number",
                                key: "ReceiptData.receipt.items.declaration_number",
                                placeholder: "Enter declaration_number",
                                fieldType: "text",
                                isNumeric: true,
                            },
                        ]
                    },
                    {
                        name: "payments",
                        key: "ReceiptData.receipt.payments",
                        fieldType: "array",
                        subfields: [
                            {
                                name: "type",
                                key: "ReceiptData.receipt.payments.type",
                                placeholder: "Enter type",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "sum",
                                key: "ReceiptData.receipt.payments.sum",
                                placeholder: "Enter sum",
                                fieldType: "text",
                                isNumeric: true,
                            }
                        ],
                    },
                    {
                        name: "vats",
                        key: "ReceiptData.receipt.vats",
                        fieldType: "array",
                        subfields: [
                            {
                                name: "type",
                                key: "ReceiptData.receipt.vats.type",
                                placeholder: "Enter type",
                                fieldType: "picker",
                                options: VatTypeHandbook,
                            },
                            {
                                name: "sum",
                                key: "ReceiptData.receipt.vats.sum",
                                placeholder: "Enter sum",
                                fieldType: "text",
                                isNumeric: true,
                            }
                        ],
                    },
                    {
                        name: "total",
                        key: "ReceiptData.receipt.total",
                        placeholder: "Enter total",
                        fieldType: "text",
                        isNumeric: true,
                    },
                    {
                        name: "additional_check_props",
                        key: "ReceiptData.receipt.additional_check_props",
                        placeholder: "Enter additional_check_props",
                        fieldType: "text",
                    },
                    {
                        name: "cashier",
                        key: "ReceiptData.receipt.cashier",
                        placeholder: "Enter cashier",
                        fieldType: "text",
                    },
                    {
                        name: "additional_user_props",
                        key: "ReceiptData.receipt.additional_user_props",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "name",
                                key: "ReceiptData.receipt.additional_user_props.name",
                                placeholder: "Enter name",
                                fieldType: "text",
                            },
                            {
                                name: "value",
                                key: "ReceiptData.receipt.additional_user_props.value",
                                placeholder: "Enter value",
                                fieldType: "text",
                            },
                        ]
                    },
                ]
            },

        ],
    },
];


export const fieldsFFD1_02: Field[] = [
    {
        fieldType: "text",
        name: "PaymentMethod",
        placeholder: "Enter Payment Method",
        key: "PaymentMethod",
    },
    {
        fieldType: "group",
        name: "PaymentDetails",
        key: "PaymentDetails",
        subfields: [
            {
                fieldType: "text",
                name: "Value",
                placeholder: "Value",
                key: "PaymentDetails.Value",
            },
            {
                fieldType: "text",
                name: "Type",
                placeholder: "Type",
                key: "PaymentDetails.Type",
            },
            {
                fieldType: "text",
                name: "PayToken",
                placeholder: "PayToken",
                key: "PaymentDetails.PayToken",
            },
        ]
    },
    {
        name: "Order ID",
        key: "OrderId",
        placeholder: "Enter Order ID",
        fieldType: "text",
    },
    {
        name: "Amount",
        key: "Amount",
        placeholder: "Enter Amount",
        fieldType: "text",
    },
    {
        name: "Currency",
        key: "Currency",
        placeholder: "Enter Currency",
        fieldType: "text",
    },
    {
        name: "Description",
        key: "Description",
        placeholder: "Enter Description",
        fieldType: "text",
    },
    {
        name: "RebillFlag",
        key: "RebillFlag",
        placeholder: "Enter RebillFlag",
        fieldType: "picker",
        options: booleanHandbook,
    },
    {
        name: "Customer Info",
        key: "CustomerInfo",
        fieldType: "group",
        subfields: [
            {
                name: "Email",
                key: "CustomerInfo.Email",
                placeholder: "Enter Email",
                fieldType: "text",
            },
            {
                name: "ReceiptEmail",
                key: "CustomerInfo.ReceiptEmail",
                placeholder: "Enter Receipt Email",
                fieldType: "text",
            },
            {
                name: "IsSendReceipt",
                key: "CustomerInfo.IsSendReceipt",
                placeholder: "Enter Is Send Receipt",
                fieldType: "picker",
                options: booleanHandbook,
            },
            {
                name: "Phone",
                key: "CustomerInfo.Phone",
                placeholder: "Enter Phone",
                fieldType: "text",
            },
            {
                name: "Language",
                key: "CustomerInfo.Language",
                placeholder: "Enter Language",
                fieldType: "text",
            },
            {
                name: "Address",
                key: "CustomerInfo.Address",
                placeholder: "Enter Address",
                fieldType: "text",
            },
            {
                name: "Town",
                key: "CustomerInfo.Town",
                placeholder: "Enter Town",
                fieldType: "text",
            },
            {
                name: "ZIP",
                key: "CustomerInfo.ZIP",
                placeholder: "Enter ZIP",
                fieldType: "text",
            },
            {
                name: "Country",
                key: "CustomerInfo.Country",
                placeholder: "Enter Country",
                fieldType: "text",
            },
            {
                name: "IP",
                key: "CustomerInfo.IP",
                placeholder: "Enter IP",
                fieldType: "text",
            },
            {
                name: "UserId",
                key: "CustomerInfo.UserId",
                placeholder: "Enter User Id",
                fieldType: "text",
            },
        ],
    },
    {
        name: "ExtraData",
        key: "ExtraData",
        fieldType: "group",
        subfields: [
            {
                name: "ReturnUrl",
                key: "ExtraData.ReturnUrl",
                placeholder: "Enter Return Url",
                fieldType: "text",
            },
            {
                name: "ReturnUrl",
                key: "ExtraData.WebhookUrl",
                placeholder: "Enter Webhook Url",
                fieldType: "text",
            },
            {
                name: "ScreenHeight",
                key: "ExtraData.ScreenHeight",
                placeholder: "Enter Screen Height",
                fieldType: "text",
            },
            {
                name: "ScreenWidth",
                key: "ExtraData.ScreenWidth",
                placeholder: "Enter Screen Width",
                fieldType: "text",
            },
            {
                name: "ChallengeWindowSize",
                key: "ExtraData.ChallengeWindowSize",
                placeholder: "Enter Screen Challenge Window Size",
                fieldType: "text",
            },
            {
                name: "TimeZoneOffset",
                key: "ExtraData.TimeZoneOffset",
                placeholder: "Enter Time Zone Offset",
                fieldType: "text",
            },
            {
                name: "ColorDepth",
                key: "ExtraData.ColorDepth",
                placeholder: "Enter Color Depth",
                fieldType: "text",
            },
            {
                name: "Region",
                key: "ExtraData.Region",
                placeholder: "Enter Region",
                fieldType: "text",
            },
            {
                name: "UserAgent",
                key: "ExtraData.UserAgent",
                placeholder: "Enter User Agent",
                fieldType: "text",
            },
            {
                name: "acceptHeader",
                key: "ExtraData.acceptHeader",
                placeholder: "Enter accept Header",
                fieldType: "text",
            },
            {
                name: "JavaEnabled",
                key: "ExtraData.JavaEnabled",
                placeholder: "Enter Java Enabled",
                fieldType: "picker",
                options: booleanHandbook,
            },
            {
                name: "javaScriptEnabled",
                key: "ExtraData.javaScriptEnabled",
                placeholder: "Enter java Script Enabled",
                fieldType: "picker",
                options: booleanHandbook,
            },
        ],
    },
    {
        name: "ReceiptData",
        key: "ReceiptData",
        fieldType: "group",
        subfields: [
            {
                name: "timestamp",
                key: "ReceiptData.timestamp",
                placeholder: "Enter timestamp",
                fieldType: "text",
            },
            {
                name: "external_id",
                key: "ReceiptData.external_id",
                placeholder: "Enter external id",
                fieldType: "text",
            },
            {
                name: "receipt",
                key: "ReceiptData.receipt",
                fieldType: "group",
                subfields: [
                    {
                        name: "client",
                        key: "ReceiptData.receipt.client",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "name",
                                key: "ReceiptData.receipt.client.name",
                                placeholder: "Enter external name",
                                fieldType: "text",
                            },
                            {
                                name: "inn",
                                key: "ReceiptData.receipt.client.inn",
                                placeholder: "Enter external inn",
                                fieldType: "text",
                            },
                            {
                                name: "email",
                                key: "ReceiptData.receipt.client.email",
                                placeholder: "Enter external email",
                                fieldType: "text",
                            },
                            {
                                name: "phone",
                                key: "ReceiptData.receipt.client.phone",
                                placeholder: "Enter external phone",
                                fieldType: "text",
                            },
                        ]
                    },
                    {
                        name: "company",
                        key: "ReceiptData.receipt.company",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "email",
                                key: "ReceiptData.receipt.company.email",
                                placeholder: "Enter email",
                                fieldType: "text",
                            },
                            {
                                name: "sno",
                                key: "ReceiptData.receipt.company.sno",
                                placeholder: "Enter sno",
                                fieldType: "picker",
                                options: SnoHandbook,
                            },
                            {
                                name: "inn",
                                key: "ReceiptData.receipt.company.inn",
                                placeholder: "Enter inn",
                                fieldType: "text",
                            },
                            {
                                name: "payment_address",
                                key: "ReceiptData.receipt.company.payment_address",
                                placeholder: "Enter payment_address",
                                fieldType: "text",
                            },
                        ]
                    },
                    {
                        name: "items",
                        key: "ReceiptData.receipt.items",
                        fieldType: "array",
                        subfields: [
                            {
                                name: "name",
                                key: "ReceiptData.receipt.items.name",
                                placeholder: "Enter name",
                                fieldType: "text",
                            },
                            {
                                name: "price",
                                key: "ReceiptData.receipt.items.price",
                                placeholder: "Enter price",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "quantity",
                                key: "ReceiptData.receipt.items.quantity",
                                placeholder: "Enter quantity",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "sum",
                                key: "ReceiptData.receipt.items.sum",
                                placeholder: "Enter sum",
                                fieldType: "text",
                            },
                            {
                                name: "measure",
                                key: "ReceiptData.receipt.items.measure",
                                placeholder: "Enter measure",
                                fieldType: "text",
                            },
                            {
                                name: "payment_method",
                                key: "ReceiptData.receipt.items.payment_method",
                                placeholder: "Enter payment method",
                                fieldType: "picker",
                                options: PaymentMethodTypeHandbook,
                            },
                            {
                                name: "payment_object",
                                key: "ReceiptData.receipt.items.payment_object",
                                placeholder: "Enter payment object",
                                fieldType: "picker",
                                isNumeric: true,
                                options: PaymentObjectFFD1_2Handbook,
                            },
                            {
                                name: "vat",
                                key: "ReceiptData.receipt.items.vat",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "type",
                                        key: "ReceiptData.receipt.items.vat.type",
                                        placeholder: "Enter type",
                                        fieldType: "picker",
                                        options: VatTypeHandbook,

                                    },
                                    {
                                        name: "sum",
                                        key: "ReceiptData.receipt.items.vat.sum",
                                        placeholder: "Enter sum",
                                        fieldType: "text",
                                        isNumeric: true,
                                    },
                                ]
                            },
                            {
                                name: "agent_info",
                                key: "ReceiptData.receipt.items.agent_info",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "type",
                                        key: "ReceiptData.receipt.items.agent_info.type",
                                        placeholder: "Enter type",
                                        fieldType: "picker",
                                        options: AgentInfoTypeHandbook,
                                    },
                                    {
                                        name: "paying_agent",
                                        key: "ReceiptData.receipt.items.agent_info.paying_agent",
                                        fieldType: "group",
                                        subfields: [
                                            {
                                                name: "operation",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.operation",
                                                placeholder: "Enter operation",
                                                fieldType: "text",
                                            },
                                            {
                                                name: "phones",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.phones",
                                                placeholder: "Enter phones",
                                                fieldType: "text",
                                                isMulti: true,
                                            },
                                        ]
                                    },
                                    {
                                        name: "receive_payments_operator",
                                        key: "ReceiptData.receipt.items.agent_info.paying_agent.receive_payments_operator",
                                        fieldType: "group",
                                        subfields: [
                                            {
                                                name: "phones",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.receive_payments_operator.phones",
                                                placeholder: "Enter phones",
                                                fieldType: "text",
                                                isMulti: true,
                                            },
                                        ]
                                    },
                                    {
                                        name: "money_transfer_operator",
                                        key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator",
                                        fieldType: "group",
                                        subfields: [
                                            {
                                                name: "phones",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.phones",
                                                placeholder: "Enter phones",
                                                fieldType: "text",
                                                isMulti: true,
                                            },
                                            {
                                                name: "name",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.name",
                                                placeholder: "Enter name",
                                                fieldType: "text",
                                            },
                                            {
                                                name: "address",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.address",
                                                placeholder: "Enter address",
                                                fieldType: "text",
                                            },
                                            {
                                                name: "inn",
                                                key: "ReceiptData.receipt.items.agent_info.paying_agent.money_transfer_operator.inn",
                                                placeholder: "Enter inn",
                                                fieldType: "text",
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                name: "supplier_info",
                                key: "ReceiptData.receipt.items.supplier_info",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "phones",
                                        key: "ReceiptData.receipt.items.supplier_info.phones",
                                        placeholder: "Enter phones",
                                        fieldType: "text",
                                        isMulti: true,
                                    },
                                    {
                                        name: "name",
                                        key: "ReceiptData.receipt.items.supplier_info.name",
                                        placeholder: "Enter name",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "inn",
                                        key: "ReceiptData.receipt.items.supplier_info.inn",
                                        placeholder: "Enter inn",
                                        fieldType: "text",
                                    },
                                ],
                            },
                            {
                                name: "user_data",
                                key: "ReceiptData.receipt.items.user_data",
                                placeholder: "Enter user_data",
                                fieldType: "text",
                            },
                            {
                                name: "excise",
                                key: "ReceiptData.receipt.items.excise",
                                placeholder: "Enter excise",
                                fieldType: "text",
                                isNumeric: true,
                            },
                            {
                                name: "country_code",
                                key: "ReceiptData.receipt.items.country_code",
                                placeholder: "Enter country_code",
                                fieldType: "text",
                            },
                            {
                                name: "declaration_number",
                                key: "ReceiptData.receipt.items.declaration_number",
                                placeholder: "Enter declaration_number",
                                fieldType: "text",
                            },
                            {
                                name: "mark_quantity",
                                key: "ReceiptData.receipt.items.mark_quantity",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "numerator",
                                        key: "ReceiptData.receipt.items.numerator",
                                        placeholder: "Enter numerator",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "denominator",
                                        key: "ReceiptData.receipt.items.denominator",
                                        placeholder: "Enter denominator",
                                        fieldType: "text",
                                    },
                                ]
                            },
                            {
                                name: "mark_processing_mode",
                                key: "ReceiptData.receipt.items.mark_processing_mode",
                                placeholder: "Enter mark_processing_mode",
                                fieldType: "text",
                            },
                            {
                                name: "sectoral_item_props",
                                key: "ReceiptData.receipt.items.sectoral_item_props",
                                placeholder: "Enter sectoral_item_props",
                                fieldType: "array",
                                subfields: [
                                    {
                                        name: "federal_id",
                                        key: "ReceiptData.receipt.items.sectoral_item_props.federal_id",
                                        placeholder: "Enter federal_id",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "date",
                                        key: "ReceiptData.receipt.items.sectoral_item_props.date",
                                        placeholder: "Enter date",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "number",
                                        key: "ReceiptData.receipt.items.sectoral_item_props.number",
                                        placeholder: "Enter number",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "value",
                                        key: "ReceiptData.receipt.items.sectoral_item_props.value",
                                        placeholder: "Enter value",
                                        fieldType: "text",
                                    },
                                ],
                            },
                            {
                                name: "mark_code",
                                key: "ReceiptData.receipt.items.mark_code",
                                fieldType: "group",
                                subfields: [
                                    {
                                        name: "unknown",
                                        key: "ReceiptData.receipt.items.mark_code.unknown",
                                        placeholder: "Enter unknown",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "ean",
                                        key: "ReceiptData.receipt.items.mark_code.ean",
                                        placeholder: "Enter ean",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "ean13",
                                        key: "ReceiptData.receipt.items.mark_code.ean13",
                                        placeholder: "Enter ean13",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "itf14",
                                        key: "ReceiptData.receipt.items.mark_code.itf14",
                                        placeholder: "Enter itf14",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "gs10",
                                        key: "ReceiptData.receipt.items.mark_code.gs10",
                                        placeholder: "Enter gs10",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "gs1m",
                                        key: "ReceiptData.receipt.items.mark_code.gs1m",
                                        placeholder: "Enter gs1m",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "short",
                                        key: "ReceiptData.receipt.items.mark_code.short",
                                        placeholder: "Enter short",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "fur",
                                        key: "ReceiptData.receipt.items.mark_code.fur",
                                        placeholder: "Enter fur",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "egais20",
                                        key: "ReceiptData.receipt.items.mark_code.egais20",
                                        placeholder: "Enter egais20",
                                        fieldType: "text",
                                    },
                                    {
                                        name: "egais30",
                                        key: "ReceiptData.receipt.items.mark_code.egais30",
                                        placeholder: "Enter egais30",
                                        fieldType: "text",
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: "payments",
                        key: "ReceiptData.receipt.payments",
                        fieldType: "array",
                        subfields: [
                            {
                                name: "type",
                                key: "ReceiptData.receipt.payments.type",
                                placeholder: "Enter type",
                                fieldType: "picker",
                                options: PaymentsTypeHandbook,
                                isNumeric: true,
                            },
                            {
                                name: "sum",
                                key: "ReceiptData.receipt.payments.sum",
                                placeholder: "Enter sum",
                                fieldType: "text",
                                isNumeric: true,
                            }
                        ],
                    },
                    {
                        name: "vats",
                        key: "ReceiptData.receipt.vats",
                        fieldType: "array",
                        subfields: [
                            {
                                name: "type",
                                key: "ReceiptData.receipt.vats.type",
                                placeholder: "Enter type",
                                fieldType: "picker",
                                options: VatTypeHandbook,
                            },
                            {
                                name: "sum",
                                key: "ReceiptData.receipt.vats.sum",
                                placeholder: "Enter sum",
                                fieldType: "text",
                                isNumeric: true,
                            }
                        ],
                    },
                    {
                        name: "total",
                        key: "ReceiptData.receipt.total",
                        placeholder: "Enter total",
                        fieldType: "text",
                    },
                    {
                        name: "additional_check_props",
                        key: "ReceiptData.receipt.additional_check_props",
                        placeholder: "Enter additional_check_props",
                        fieldType: "text",
                    },
                    {
                        name: "cashier",
                        key: "ReceiptData.receipt.cashier",
                        placeholder: "Enter cashier",
                        fieldType: "text",
                    },
                    {
                        name: "additional_user_props",
                        key: "ReceiptData.receipt.additional_user_props",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "name",
                                key: "ReceiptData.receipt.additional_user_props.name",
                                placeholder: "Enter name",
                                fieldType: "text",
                            },
                            {
                                name: "value",
                                key: "ReceiptData.receipt.additional_user_props.value",
                                placeholder: "Enter value",
                                fieldType: "text",
                            },
                        ]
                    },
                    {
                        name: "operating_check_props",
                        key: "ReceiptData.receipt.operating_check_props",
                        fieldType: "group",
                        subfields: [
                            {
                                name: "name",
                                key: "ReceiptData.receipt.operating_check_props.name",
                                placeholder: "Enter name",
                                fieldType: "text"
                            },
                            {
                                name: "value",
                                key: "ReceiptData.receipt.operating_check_props.value",
                                placeholder: "Enter value",
                                fieldType: "text"
                            },
                            {
                                name: "timestamp",
                                key: "ReceiptData.receipt.operating_check_props.timestamp",
                                placeholder: "Enter timestamp",
                                fieldType: "text"
                            }
                        ]
                    },
                    {
                        name: "sectoral_check_props",
                        key: "ReceiptData.receipt.sectoral_check_props",
                        fieldType: "array",
                        subfields: [
                            {
                                name: "federal_id",
                                key: "ReceiptData.receipt.sectoral_check_props.federal_id",
                                placeholder: "Enter federal_id",
                                fieldType: "text"
                            },
                            {
                                name: "date",
                                key: "ReceiptData.receipt.operating_check_props.date",
                                placeholder: "Enter date",
                                fieldType: "text"
                            },
                            {
                                name: "number",
                                key: "ReceiptData.receipt.operating_check_props.number",
                                placeholder: "Enter number",
                                fieldType: "text"
                            },
                            {
                                name: "value",
                                key: "ReceiptData.receipt.operating_check_props.value",
                                placeholder: "Enter value",
                                fieldType: "text"
                            }
                        ]
                    }
                ]

            },
        ]
    }
];