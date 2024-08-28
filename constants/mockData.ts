import {
    AgentInfoType,
    PaymentMethodType, PaymentObjectFFD1_05, PaymentObjectFFD1_2, PaymentsType,
    TaxSystem, VatType,
} from "payselection-pay-app-sdk-reactnative/src/types/commonTypes";
import {
    CryptogramPayment,
    SberPayPayment,
} from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";
import { PayResponse } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentResponse";
import {
    TransactionStateDeclined,
    TransactionStateWaitFor3ds,
} from "payselection-pay-app-sdk-reactnative/src/types/status/statusResponse";


export const MockCryptogramPaymentDataFFD1_05: CryptogramPayment = {
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
        IP: "10.0.2.56",
        UserId: "string"
    },
    ExtraData: {
        ReturnUrl: "https://api.payselection.com/",
        WebhookUrl: "https://webhook.site/94a06b69",
        ScreenHeight: "768",
        ScreenWidth: "1024",
        ChallengeWindowSize: "5",
        TimeZoneOffset: "-180",
        ColorDepth: "8",
        Region: "ru",
        UserAgent: "Mozilla/5.0+(Macintosh;+Intel+Mac+OS+X+10_15_5)+AppleWebKit/527.36+(KHTML,+Gecko)+Chrome83.0.4103.116+Safari/537.36",
        acceptHeader: "text/html",
        JavaEnabled: true,
        javaScriptEnabled: true
    },
    ReceiptData: {
        timestamp: "string",
        external_id: "string",
        receipt: {
            client: {
                name: "string",
                inn: "string",
                email: "string",
                phone: "string"
            },
            company: {
                email: "string",
                sno: TaxSystem.osn,
                inn: "string",
                payment_address: "string",
            },
            agent_info: {
                type: AgentInfoType.bank_paying_agent,
                paying_agent: {
                    operation: "string",
                    phones: ["+375298763261"],
                },
                receive_payments_operator: {
                    phones: ["+375298763262"]
                },
                money_transfer_operator: {
                    phones: ["+375298763263"],
                    name: "string",
                    address: "string",
                    inn: "string"
                }
            },
            supplier_info: {
                phones: ["375298763264"]
            },
            items: [
                {
                    name: "string",
                    price: 42949673,
                    quantity: 99999.999,
                    sum: 42949672.95,
                    measurement_unit: "string",
                    payment_method: PaymentMethodType.full_payment,
                    payment_object: PaymentObjectFFD1_05.commodity,
                    nomenclature_code: "string",
                    vat: {
                        type: VatType.vat10,
                        sum: 99999999.99,
                    },
                    agent_info: {
                        type: AgentInfoType.bank_paying_agent,
                        paying_agent: {
                            operation: "string",
                            phones: ["+375441238751"]
                        },
                        receive_payments_operator: {
                            phones: ["+375441238752"]
                        },
                        money_transfer_operator: {
                            phones: ["+375441238734"],
                            name: "string",
                            address: "string",
                            inn: "string",
                        },
                    },
                    supplier_info: {
                        phones: ["+375441238731"],
                        name: "string",
                        inn: "string",
                    },
                    user_data: "string",
                    excise: 0,
                    country_code: "str",
                    declaration_number: "string",
                }
            ],
            payments: [{
                type: PaymentsType.cash,
                sum: 99999999.99,
            }],
            vats: [{
                type: VatType.vat0,
                sum: 99999999.99,
            }],
            total: 99999999.99,
            additional_check_props: "string",
            cashier: "string",
            additional_user_props: {
                name: "string",
                value: "string"
            }
        }
    },
    PaymentDetails: {
        Value: "",
    },
    PaymentMethod: "Cryptogram",
}

export const MockSberPaymentDataFFD1_05: SberPayPayment = {
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
        IP: "10.0.2.56",
        UserId: "string"
    },
    ExtraData: {
        ReturnUrl: "https://api.payselection.com/",
        WebhookUrl: "https://webhook.site/94a06b69",
        ScreenHeight: "768",
        ScreenWidth: "1024",
        ChallengeWindowSize: "5",
        TimeZoneOffset: "-180",
        ColorDepth: "8",
        Region: "ru",
        UserAgent: "Mozilla/5.0+(Macintosh;+Intel+Mac+OS+X+10_15_5)+AppleWebKit/527.36+(KHTML,+Gecko)+Chrome83.0.4103.116+Safari/537.36",
        acceptHeader: "text/html",
        JavaEnabled: true,
        javaScriptEnabled: true
    },
    ReceiptData: {
        timestamp: "string",
        external_id: "string",
        receipt: {
            client: {
                name: "string",
                inn: "string",
                email: "string",
                phone: "string"
            },
            company: {
                email: "string",
                sno: TaxSystem.osn,
                inn: "string",
                payment_address: "string",
            },
            agent_info: {
                type: AgentInfoType.bank_paying_agent,
                paying_agent: {
                    operation: "string",
                    phones: ["+375298763261"],
                },
                receive_payments_operator: {
                    phones: ["+375298763262"]
                },
                money_transfer_operator: {
                    phones: ["+375298763263"],
                    name: "string",
                    address: "string",
                    inn: "string"
                }
            },
            supplier_info: {
                phones: ["375298763264"]
            },
            items: [
                {
                    name: "string",
                    price: 42949673,
                    quantity: 99999.999,
                    sum: 42949672.95,
                    measurement_unit: "string",
                    payment_method: PaymentMethodType.full_payment,
                    payment_object: PaymentObjectFFD1_05.commodity,
                    nomenclature_code: "string",
                    vat: {
                        type: VatType.vat10,
                        sum: 99999999.99,
                    },
                    agent_info: {
                        type: AgentInfoType.bank_paying_agent,
                        paying_agent: {
                            operation: "string",
                            phones: ["+375441238751"]
                        },
                        receive_payments_operator: {
                            phones: ["+375441238752"]
                        },
                        money_transfer_operator: {
                            phones: ["+375441238734"],
                            name: "string",
                            address: "string",
                            inn: "string",
                        },
                    },
                    supplier_info: {
                        phones: ["+375441238731"],
                        name: "string",
                        inn: "string",
                    },
                    user_data: "string",
                    excise: 0,
                    country_code: "str",
                    declaration_number: "string",
                }
            ],
            payments: [{
                type: PaymentsType.cash,
                sum: 99999999.99,
            }],
            vats: [{
                type: VatType.vat0,
                sum: 99999999.99,
            }],
            total: 99999999.99,
            additional_check_props: "string",
            cashier: "string",
            additional_user_props: {
                name: "string",
                value: "string"
            }
        }
    },
    PaymentMethod: "SberPay",
}

export const MockCryptogramPaymentDataFFD1_2: CryptogramPayment = {
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
        IP: "10.0.2.56",
        UserId: "string"
    },
    ExtraData: {
        ReturnUrl: "https://api.payselection.com/",
        WebhookUrl: "https://webhook.site/94a06b69",
        ScreenHeight: "768",
        ScreenWidth: "1024",
        ChallengeWindowSize: "5",
        TimeZoneOffset: "-180",
        ColorDepth: "8",
        Region: "ru",
        UserAgent: "Mozilla/5.0+(Macintosh;+Intel+Mac+OS+X+10_15_5)+AppleWebKit/527.36+(KHTML,+Gecko)+Chrome83.0.4103.116+Safari/537.36",
        acceptHeader: "text/html",
        JavaEnabled: true,
        javaScriptEnabled: true
    },
    ReceiptData: {
        timestamp: "string",
        external_id: "string",
        receipt: {
            client: {
                name: "string",
                inn: "string",
                email: "string",
                phone: "string"
            },
            company: {
                email: "string",
                sno: TaxSystem.osn,
                inn: "string",
                payment_address: "string",
            },
            items: [
                {
                    name: "string",
                    price: 42949673,
                    quantity: 99999.999,
                    sum: 42949672.95,
                    measure: 0,
                    payment_method: PaymentMethodType.full_payment,
                    payment_object: PaymentObjectFFD1_2.pawn,
                    vat: {
                        type: VatType.vat10,
                        sum: 99999999.99,
                    },
                    agent_info: {
                        type: AgentInfoType.bank_paying_agent,
                        paying_agent: {
                            operation: "string",
                            phones: ["+375441238751"]
                        },
                        receive_payments_operator: {
                            phones: ["+375441238752"]
                        },
                        money_transfer_operator: {
                            phones: ["+375441238734"],
                            name: "string",
                            address: "string",
                            inn: "string",
                        },
                    },
                    supplier_info: {
                        phones: ["+375441238731"],
                        name: "string",
                        inn: "string",
                    },
                    user_data: "string",
                    excise: 0,
                    country_code: "str",
                    declaration_number: "string",
                    mark_quantity: {
                        numerator: 2,
                        denominator: 2
                    },
                    mark_processing_mode: "string",
                    sectoral_item_props: [{
                        federal_id: "string",
                        date: "string",
                        number: "string",
                        value: "string"
                    }],
                    mark_code: {
                        unknown: "string",
                        ean: "string",
                        ean13: "string",
                        itf14: "string",
                        gs10: "string",
                        gs1m: "string",
                        short: "string",
                        fur: "string",
                        egais20: "string",
                        egais30: "string",
                    }
                }
            ],
            payments: [{
                type: PaymentsType.cash,
                sum: 99999999.99,
            }],
            vats: [{
                type: VatType.vat0,
                sum: 99999999.99,
            }],
            total: 99999999.99,
            additional_check_props: "string",
            cashier: "string",
            additional_user_props: {
                name: "string",
                value: "string"
            },
            operating_check_props: {
                name: "string",
                value: "string",
                timestamp: "string",
            },
            sectoral_check_props: [{
                federal_id: "string",
                date: "string",
                number: "string",
                value: "string",
            }]
        }
    },
    PaymentDetails: {
        Value: "",
    },
    PaymentMethod: "Cryptogram",
}

export const MockTransactionStateWaitFor3ds: TransactionStateWaitFor3ds = {
    TransactionState: "",
    TransactionId: "",
    OrderId: "",
    StateDetails: {
        AcsUrl: "",
        PaReq: "",
        MD: "",
    }
}

export const MockPayResponse: PayResponse = {
    TransactionId: "",
    OrderId: "",
    Amount: 0,
    Currency: "",
    RedirectUrl: "",
    TransactionSecretKey: "",
}

export const MockTransactionStatus: TransactionStateDeclined = {
    TransactionState: "",
    TransactionId: "",
    OrderId: "",
    StateDetails: {
        Code: "",
        Description: "",
    }
}

const cryptogramRSAValueData = {
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

export const cryptogramECDHValueData = {
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
    PaymentMethod: "Cryptogram",
    MessageExpiration: Date.now() + 86400000,
}
