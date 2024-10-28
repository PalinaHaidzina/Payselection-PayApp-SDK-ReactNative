import {
  AgentInfoType,
  PaymentMethodType,
  PaymentObjectFFD1_05,
  PaymentsType,
  TaxSystem,
  VatType,
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
import { CryptogramValueProps } from "payselection-pay-app-sdk-reactnative/src/types/payment/cryptoUtils";

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
    UserId: "string",
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
    UserAgent:
      "Mozilla/5.0+(Macintosh;+Intel+Mac+OS+X+10_15_5)+AppleWebKit/527.36+(KHTML,+Gecko)+Chrome83.0.4103.116+Safari/537.36",
    acceptHeader: "text/html",
    JavaEnabled: true,
    javaScriptEnabled: true,
  },
  ReceiptData: {
    timestamp: "string",
    external_id: "string",
    receipt: {
      client: {
        name: "string",
        inn: "string",
        email: "string",
        phone: "string",
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
          phones: ["+375298763262"],
        },
        money_transfer_operator: {
          phones: ["+375298763263"],
          name: "string",
          address: "string",
          inn: "string",
        },
      },
      supplier_info: {
        phones: ["375298763264"],
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
              phones: ["+375441238751"],
            },
            receive_payments_operator: {
              phones: ["+375441238752"],
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
        },
      ],
      payments: [
        {
          type: PaymentsType.cash,
          sum: 99999999.99,
        },
      ],
      vats: [
        {
          type: VatType.vat0,
          sum: 99999999.99,
        },
      ],
      total: 99999999.99,
      additional_check_props: "string",
      cashier: "string",
      additional_user_props: {
        name: "string",
        value: "string",
      },
    },
  },
  PaymentDetails: {
    Value: "",
  },
  PaymentMethod: "Cryptogram",
};

export const MockSberPaymentDataFFD1_05: SberPayPayment = {
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
    UserId: "string",
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
    UserAgent:
      "Mozilla/5.0+(Macintosh;+Intel+Mac+OS+X+10_15_5)+AppleWebKit/527.36+(KHTML,+Gecko)+Chrome83.0.4103.116+Safari/537.36",
    acceptHeader: "text/html",
    JavaEnabled: true,
    javaScriptEnabled: true,
  },
  ReceiptData: {
    timestamp: "string",
    external_id: "string",
    receipt: {
      client: {
        name: "string",
        inn: "string",
        email: "string",
        phone: "string",
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
          phones: ["+375298763262"],
        },
        money_transfer_operator: {
          phones: ["+375298763263"],
          name: "string",
          address: "string",
          inn: "string",
        },
      },
      supplier_info: {
        phones: ["375298763264"],
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
              phones: ["+375441238751"],
            },
            receive_payments_operator: {
              phones: ["+375441238752"],
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
        },
      ],
      payments: [
        {
          type: PaymentsType.cash,
          sum: 99999999.99,
        },
      ],
      vats: [
        {
          type: VatType.vat0,
          sum: 99999999.99,
        },
      ],
      total: 99999999.99,
      additional_check_props: "string",
      cashier: "string",
      additional_user_props: {
        name: "string",
        value: "string",
      },
    },
  },
  PaymentMethod: "SberPay",
};

export const MockCryptogramPaymentDataFFD1_2 = {
  OrderId: "SAM_SDK_3",
  Amount: "11.00",
  Currency: "RUB",
  Description: "test payment",
  RebillFlag: false,
  CustomerInfo: {
    Email: "user@example.com",
    Phone: "+19991231212",
    ReceiptEmail: "user@example.com",
    IsSendReceipt: true,
    Language: "en",
    Address: "string",
    Town: "string",
    ZIP: "1234567",
    Country: "USA",
    IP: "10.0.2.56",
    UserId: "string",
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
    UserAgent:
      "Mozilla/5.0+(Macintosh;+Intel+Mac+OS+X+10_15_5)+AppleWebKit/527.36+(KHTML,+Gecko)+Chrome83.0.4103.116+Safari/537.36",
    acceptHeader: "text/html",
    JavaEnabled: true,
    javaScriptEnabled: true,
  },
  ReceiptData: {
    timestamp: "20.08.2024 15:20:00",
    external_id: "string",
    receipt: {
      client: {
        name: "name",
        inn: "1234567890",
        email: "your@test.email",
        phone: "+7000000000",
      },
      company: {
        email: "your@test.email",
        sno: "osn",
        inn: "7723517121",
        payment_address: "https://site.ru/",
      },
      items: [
        {
          name: "test_01",
          price: 10,
          quantity: 2,
          sum: 1,
          measure: 83,
          payment_method: "full_payment",
          payment_object: 9,
          vat: {
            type: "vat10",
            sum: 99999999.99,
          },
          agent_info: {
            type: "bank_paying_agent",
            paying_agent: {
              operation: "test",
              phones: ["+375441238751", "+375441238751"],
            },
            receive_payments_operator: {
              phones: ["+375441238752", "+375441238752"],
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
          country_code: "440",
          declaration_number: "1212",
          mark_quantity: {
            numerator: 1,
            denominator: 2,
          },
          mark_processing_mode: "0",
          sectoral_item_props: [
            {
              federal_id: "072",
              date: "20.08.2024",
              number: "1",
              value: "2",
            },
          ],
          mark_code: {
            unknown: "test item code",
            ean: "95050003",
            ean13: "8901072002478",
            itf14: "89010720024780",
            gs10: "19501101530000",
            gs1m: "MTk1MDExMDE1MzAwMDA=",
            short: "test",
            fur: "CC-345789-ABCDEFGHIJ",
            egais20: "test0000000000000000000",
            egais30: "test0000000000",
          },
        },
      ],
      payments: [
        {
          type: 0,
          sum: 99999999.99,
        },
      ],
      vats: [
        {
          type: "vat0",
          sum: 99999999.99,
        },
      ],
      total: 99999999.99,
      additional_check_props: "test_additional",
      cashier: "any_name",
      additional_user_props: {
        name: "test_test_test",
        value: "test_03",
      },
      operating_check_props: {
        name: "0",
        value: "test_04",
        timestamp: "20.08.2024 16:10:01",
      },
      sectoral_check_props: [
        {
          federal_id: "072",
          date: "20.08.2024",
          number: "1",
          value: "2",
        },
      ],
    },
  },
  PaymentMethod: "",
};

export const MockTransactionStateWaitFor3ds: TransactionStateWaitFor3ds = {
  TransactionState: "",
  TransactionId: "",
  OrderId: "",
  StateDetails: {
    AcsUrl: "",
    PaReq: "",
    MD: "",
  },
};

export const MockPayResponse: PayResponse = {
  TransactionId: "",
  OrderId: "",
  Amount: 0,
  Currency: "",
  RedirectUrl: "",
  TransactionSecretKey: "",
};

export const MockTransactionStatus: TransactionStateDeclined = {
  TransactionState: "",
  TransactionId: "",
  OrderId: "",
  StateDetails: {
    Code: "",
    Description: "",
  },
};

export const cryptogramRSAValueData = {
  TransactionDetails: {
    Amount: "11.00",
    Currency: "RUB",
  },
  PaymentDetails: {
    CardholderName: "Card Holder",
    CardNumber: "4111111111111111",
    CVC: "603",
    ExpMonth: "04",
    ExpYear: "44",
  },
  PaymentMethod: "CryptogramRSA",
  MessageExpiration: Date.now() + 86400000,
};

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
    ExpYear: "44",
  },
  PaymentMethod: "Cryptogram",
  MessageExpiration: Date.now() + 86400000,
};

export const emptyCryptogramValueData: CryptogramValueProps = {
  TransactionDetails: {
    Amount: "",
    Currency: "",
  },
  PaymentDetails: {
    CardholderName: "",
    CardNumber: "",
    CVC: "",
    ExpMonth: "",
    ExpYear: "",
  },
  PaymentMethod: "",
  MessageExpiration: Date.now() + 86400000,
};
