import {
    AgentInfoType,
    PaymentMethodType,
    PaymentObjectFFD1_05, PaymentsType, TaxSystem, VatType,
} from "payselection-pay-app-sdk-reactnative/src/types/commonTypes";
import { CryptogramPayment } from "payselection-pay-app-sdk-reactnative/src/types/payment/paymentPayload";

export const defaultPaymentPayloadValues: CryptogramPayment = {
    PaymentMethod: "Cryptogram",
    PaymentDetails: {
        Value: "",
    },
    OrderId: "",
    Amount: "",
    Currency: "",
    Description: "",
    RebillFlag: false,
    CustomerInfo: {
        Email: "",
        ReceiptEmail: "",
        IsSendReceipt: false,
        Phone: "",
        Language: "",
        Address: "",
        Town: "",
        ZIP: "",
        Country: "",
        IP: "",
        UserId: ""
    },
    ExtraData: {
        ReturnUrl: "",
        WebhookUrl: "",
        ScreenHeight: "",
        ScreenWidth: "",
        ChallengeWindowSize: "",
        TimeZoneOffset: "",
        ColorDepth: "",
        Region: "",
        UserAgent: "",
        acceptHeader: "",
        JavaEnabled: false,
        javaScriptEnabled: false
    },
    ReceiptData: {
        timestamp: "",
        external_id: "",
        receipt: {
            client: {
                name: "",
                inn: "",
                email: "",
                phone: ""
            },
            company: {
                email: "",
                sno: TaxSystem.osn,
                inn: "",
                payment_address: ""
            },
            agent_info: {
                type: AgentInfoType.another,
                paying_agent: {
                    operation: "",
                    phones: []
                },
                receive_payments_operator: {
                    phones: []
                },
                money_transfer_operator: {
                    phones: [],
                    name: "",
                    address: "",
                    inn: ""
                }
            },
            supplier_info: {
                phones: []
            },
            items: [{
                name: "",
                price: 0,
                quantity: 0,
                sum: null,
                payment_method: PaymentMethodType.full_payment,
                payment_object: PaymentObjectFFD1_05.commodity,
                vat: {
                    type: VatType.none,
                    sum: null
                }
            }],
            payments: [{
                type: PaymentsType.cash,
                sum: null
            }],
            vats: [],
            total: 0,
            additional_check_props: "",
            cashier: "",
            additional_user_props: {
                name: "",
                value: ""
            }
        }
    }
};
