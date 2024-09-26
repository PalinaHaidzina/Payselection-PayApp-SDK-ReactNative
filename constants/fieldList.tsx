import { FormFieldType } from "@/constants/formFielsLists/commonTypes";
import {
    AgentInfoTypeHandbook,
    booleanHandbook,
    PaymentMethodTypeHandbook, PaymentObjectFFD1_05, PaymentsTypeHandbook,
    SnoHandbook, VatTypeHandbook,
} from "@/constants/formFielsLists/handbook";

export const fieldsList = [
    {
        type: FormFieldType.input,
        name: "PaymentDetails.Value",
        placeholder: "Value",
        key: "payment-details",
    },
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
        placeholder: "OrderId",
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
        placeholder: "RebillFlag",
        key: "rebill-flag",
        options: booleanHandbook,
    },
    
    //Customer info
    /*{
        type: FormFieldType.subTitle,
        name: "Customer Info",
        placeholder: "CustomerInfo",
        key: "customer-info",
    },*/
    
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
    
    //ExtraData
    /*{
        type: FormFieldType.subTitle,
        name: "Extra Data",
        placeholder: "ExtraData",
        key: "extra-data",
    },*/
    
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
    
    //ReceiptData
    /*{
        type: FormFieldType.subTitle,
        name: "Receipt Data",
        placeholder: "ReceiptData",
        key: "receipt-data",
    },*/
    
    {
        type: FormFieldType.input,
        name: "ReceiptData.timestamp",
        placeholder: "timestamp",
        key: "receipt-data-timestamp",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.external_id",
        placeholder: "external_id",
        key: "receipt-data-external-od==id",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.client.name",
        placeholder: "name",
        key: "receipt-client-name",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.client.inn",
        placeholder: "inn",
        key: "receipt-client-inn",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.client.email",
        placeholder: "email",
        key: "receipt-client-email",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.client.phone",
        placeholder: "phone",
        key: "receipt-client-phone",
    },
    
    //company
    
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.company.email",
        placeholder: "email",
        key: "receipt-company-email",
    },
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.company.sno",
        placeholder: "sno",
        key: "receipt-company-sno",
        options: SnoHandbook,
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.company.inn",
        placeholder: "inn",
        key: "receipt-company-inn",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.company.payment_address",
        placeholder: "payment_address",
        key: "receipt-company-payment_address",
    },
    
    //agent_info
    
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.agent_info.type",
        placeholder: "type",
        key: "receipt-agent_info-type",
        options: AgentInfoTypeHandbook,
    },
    
    //payingAgent
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.agent_info.paying_agent.operation",
        placeholder: "operation",
        key: "receipt-agent-info-paying-agent-operation",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.agent_info.paying_agent.phones",
        placeholder: "phones",
        key: "receipt-agent-info-paying-agent-phones",
    },
    //Receive payment operator
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.agent_info.receive_payments_operator.phones",
        placeholder: "phones",
        key: "receipt-agent-info-receive-payments-operator-phones",
    },
    //Money transfer operator
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.agent_info.money_transfer_operator.phones",
        placeholder: "phones",
        key: "receipt-agent_info.money-transfer-operator-phones",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.agent_info.money_transfer_operator.name",
        placeholder: "name",
        key: "receipt-agent_info.money-transfer-operator-names",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.agent_info.money_transfer_operator.address",
        placeholder: "address",
        key: "receipt-agent_info.money-transfer-operator-address",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.agent_info.money_transfer_operator.inn",
        placeholder: "inn",
        key: "receipt-agent_info.money-transfer-operator-inn",
    },
    
    //supplierInfo
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.supplier_info.phones",
        placeholder: "phones",
        key: "receipt-supplier-info-phones",
    },
    
    //items
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.name",
        placeholder: "name",
        key: "receipt-items-name",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.price",
        placeholder: "price",
        key: "receipt-items-price",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.quantity",
        placeholder: "quantity",
        key: "receipt-items-quantity",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.sum",
        placeholder: "sum",
        key: "receipt-items-sum",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.measurement_unit",
        placeholder: "measurement_unit",
        key: "receipt-items-measurement_unit",
    },
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.items.payment_method",
        placeholder: "payment_method",
        key: "receipt-items-payment-method",
        options: PaymentMethodTypeHandbook,
    },
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.items.payment_object",
        placeholder: "payment_object",
        key: "receipt-items-payment-object",
        options: PaymentObjectFFD1_05,
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.nomenclature_code",
        placeholder: "nomenclature_code",
        key: "receipt-items-nomenclature-code",
        options: PaymentObjectFFD1_05,
    },
    
    //vat
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.items.vat.type",
        placeholder: "type",
        key: "receipt-items-vat-type",
        options: VatTypeHandbook,
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.vat.sum",
        placeholder: "sum",
        key: "receipt-items-vat-sum",
    },
    //agent_info
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.items.agent_info.type",
        placeholder: "type",
        key: "receipt-items-agent-info-type",
        options: AgentInfoTypeHandbook,
    },
    //paying agent
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.agent_info.paying_agent.operation",
        placeholder: "paying_agent",
        key: "receipt-items-operation-info-paying-agent-operation",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.agent_info.paying_agent.phones",
        placeholder: "phones",
        key: "receipt-items-operation-info-paying-agent-phones",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.agent_info.receive_payments_operator.phones",
        placeholder: "phones",
        key: "receipt-items-operation-info-receive-payments-operator-phones",
    },
    //Money transfer operator
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.phones",
        placeholder: "phones",
        key: "receipt-items-agent-info-money-transfer-operator-phones",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.name",
        placeholder: "name",
        key: "receipt-items-agent-info-money-transfer-operator-name",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.address",
        placeholder: "address",
        key: "receipt-items-agent-info-money-transfer-operator-address",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.agent_info.money_transfer_operator.inn",
        placeholder: "inn",
        key: "receipt-items-agent-info-money-transfer-operator-inn",
    },
    //supplier info
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.supplier_info.phones",
        placeholder: "phones",
        key: "receipt-items-supplier-info-phones",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.supplier_info.name",
        placeholder: "name",
        key: "receipt-items-supplier-info-name",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.supplier_info.inn",
        placeholder: "inn",
        key: "receipt-items-supplier-info-inn",
    },
    //
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.user_data",
        placeholder: "user_data",
        key: "receipt-items-user-data",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.excise",
        placeholder: "excise",
        key: "receipt-items-excise",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.country_code",
        placeholder: "country_code",
        key: "receipt-items-country-code",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.items.declaration_number",
        placeholder: "declaration_number",
        key: "receipt-items-country-declaration-number",
    },
    
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.payments.type",
        placeholder: "type",
        key: "receipt-payments.type",
        options: PaymentsTypeHandbook,
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.payments.sum",
        placeholder: "sum",
        key: "receipt-payments-sum",
    },
    {
        type: FormFieldType.picker,
        name: "ReceiptData.receipt.vats.type",
        placeholder: "type",
        key: "receipt-vats-type",
        options: VatTypeHandbook,
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.vats.sum",
        placeholder: "sum",
        key: "receipt-vats-sum",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.total",
        placeholder: "total",
        key: "receipt-total",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.additional_check_props",
        placeholder: "additional_check_props",
        key: "receipt-additional-check-props",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.cashier",
        placeholder: "cashier",
        key: "receipt-cashier",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.additional_user_props.name",
        placeholder: "name",
        key: "receipt-additional-user-props-name",
    },
    {
        type: FormFieldType.input,
        name: "ReceiptData.receipt.additional_user_props.value",
        placeholder: "value",
        key: "receipt-additional-user-props-value",
    },
]
