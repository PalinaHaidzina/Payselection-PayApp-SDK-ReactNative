import {
    AgentInfoType,
    PaymentMethodType,
    PaymentObjectFFD1_05, PaymentsType, TaxSystem, VatType,
} from "payselection-pay-app-sdk-reactnative/src/types/commonTypes";
import { CryptogramPayment } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";

export const defaultPaymentPayloadValues = {
    OrderId: "SAM_SDK_3",
    Amount: "11.00",
    Currency: "RUB",
    Description: "test payment",
    RebillFlag: false,
    CustomerInfo: {
        Email: "user@example.com",
        ReceiptEmail: "user@example.com",
        IsSendReceipt: true,
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
        WebhookUrl: "https://webhook.site/{your_webhook_id}",
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
        timestamp: "20.08.2024 15:20:00",
        external_id: "test_001",
        receipt: {
            client: {
                name: "name",
                inn: "1234567890",
                email: "yout@test.email",
                phone: "+7000000000"
            },
            company: {
                email: "yout@test.email",
                sno: "osn",
                inn: "7723517121",
                payment_address: "https://site.ru/",
            },
            agent_info: {
                type: "bank_paying_agent",
                paying_agent: {
                    operation: "test",
                    phones: ["+375298763261", "+375298763261"],
                },
                receive_payments_operator: {
                    phones: ["+375298763262", "+375298763262"]
                },
                money_transfer_operator: {
                    phones: ["+375298763263", "+375298763263"],
                    name: "test",
                    address: "https://site.ru/",
                    inn: "123456789012"
                }
            },
            supplier_info: {
                phones: ["375298763264", "375298763264"]
            },
            items: [
                {
                    name: "test_01",
                    price: 10,
                    quantity: 2,
                    sum: 1,
                    measurement_unit: "83",
                    payment_method: "full_payment",
                    payment_object: "commodity",
                    nomenclature_code: "111 111 111",
                    vat: {
                        type: "vat10",
                        sum: 99999999.99,
                    },
                    agent_info: {
                        type: "bank_paying_agent",
                        paying_agent: {
                            operation: "test",
                            phones: ["+375441238751", "+375441238751"]
                        },
                        receive_payments_operator: {
                            phones: ["+375441238752", "+375441238752"]
                        },
                        money_transfer_operator: {
                            phones: ["+375441238734", "+375441238734"],
                            name: "test",
                            address: "test",
                            inn: "123456789012",
                        },
                    },
                    supplier_info: {
                        phones: ["+375441238731", "+375441238731"],
                        name: "name",
                        inn: "0000000000",
                    },
                    user_data: "additional_requesite",
                    excise: 12345678.12,
                    country_code: "44",
                    declaration_number: "1212",
                }
            ],
            payments: [{
                type: "cash",
                sum: 99999999.99,
            }],
            vats: [{
                type: "vat0",
                sum: 99999999.99,
            }],
            total: 99999999.99,
            additional_check_props: "test_test_test",
            cashier: "any_name",
            additional_user_props: {
                name: "test",
                value: "test"
            }
        }
    }
};
