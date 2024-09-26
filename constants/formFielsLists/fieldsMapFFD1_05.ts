import { FormFieldType } from "@/constants/formFielsLists/commonTypes";
import {
    AgentInfoTypeHandbook,
    PaymentMethodTypeHandbook,
    PaymentObjectFFD1_05, PaymentsTypeHandbook,
    SnoHandbook, VatTypeHandbook,
} from "@/constants/formFielsLists/handbook";


const ffd1_05ClientFieldsList = [
    {
        type: FormFieldType.input,
        name: "receipt.client.name",
        placeholder: "name",
        key: "receipt-client-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.client.inn",
        placeholder: "inn",
        key: "receipt-client-inn",
    },
    {
        type: FormFieldType.input,
        name: "receipt.client.email",
        placeholder: "email",
        key: "receipt-client-email",
    },
    {
        type: FormFieldType.input,
        name: "receipt.client.phone",
        placeholder: "phone",
        key: "receipt-client-phone",
    },
]

const ffd1_05CompanyFieldsList = [
    {
        type: FormFieldType.input,
        name: "receipt.company.email",
        placeholder: "email",
        key: "receipt-company-email",
    },
    {
        type: FormFieldType.picker,
        name: "receipt.company.sno",
        placeholder: "sno",
        key: "receipt-company-sno",
        options: SnoHandbook,
    },
    {
        type: FormFieldType.input,
        name: "receipt.company.inn",
        placeholder: "inn",
        key: "receipt-company-inn",
    },
    {
        type: FormFieldType.input,
        name: "receipt.company.payment_address",
        placeholder: "payment_address",
        key: "receipt-company-payment_address",
    },
]

const ffd1_05AgentInfoList = [
    {
        type: FormFieldType.picker,
        name: "receipt.agent_info.type",
        placeholder: "type",
        key: "receipt-agent_info-type",
        options: AgentInfoTypeHandbook,
    },
    
    //payingAgent
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.paying_agent.operation",
        placeholder: "operation",
        key: "receipt-agent-info-paying-agent-operation",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.paying_agent.phones",
        placeholder: "phones",
        key: "receipt-agent-info-paying-agent-phones",
    },
    //Receive payment operator
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.receive_payments_operator.phones",
        placeholder: "phones",
        key: "receipt-agent-info-receive-payments-operator-phones",
    },
    //Money transfer operator
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.phones",
        placeholder: "phones",
        key: "receipt-agent_info.money-transfer-operator-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.name",
        placeholder: "name",
        key: "receipt-agent_info.money-transfer-operator-names",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.address",
        placeholder: "address",
        key: "receipt-agent_info.money-transfer-operator-address",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.inn",
        placeholder: "inn",
        key: "receipt-agent_info.money-transfer-operator-inn",
    },
    
]

const ffd1_05SupplierInfoList = [
    {
        type: FormFieldType.input,
        name: "receipt.supplier_info.phones",
        placeholder: "phones",
        key: "receipt-supplier-info-phones",
    },
]

const ffd1_05ItemsList = [
    {
        type: FormFieldType.input,
        name: "receipt.items.name",
        placeholder: "name",
        key: "receipt-items-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.price",
        placeholder: "price",
        key: "receipt-items-price",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.quantity",
        placeholder: "quantity",
        key: "receipt-items-quantity",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.measurement_unit",
        placeholder: "measurement_unit",
        key: "receipt-items-measurement_unit",
    },
    {
        type: FormFieldType.picker,
        name: "receipt.items.payment_method",
        placeholder: "payment_method",
        key: "receipt-items-payment-method",
        options: PaymentMethodTypeHandbook,
    },
    {
        type: FormFieldType.picker,
        name: "receipt.items.payment_object",
        placeholder: "payment_object",
        key: "receipt-items-payment-object",
        options: PaymentObjectFFD1_05,
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.nomenclature_code",
        placeholder: "nomenclature_code",
        key: "receipt-items-nomenclature-code",
        options: PaymentObjectFFD1_05,
    },
    
    //vat
    {
        type: FormFieldType.picker,
        name: "receipt.items.vat.type",
        placeholder: "type",
        key: "receipt-items-vat-type",
        options: VatTypeHandbook,
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.vat.sum",
        placeholder: "sum",
        key: "receipt-items-vat-sum",
    },
    //agent_info
    {
        type: FormFieldType.picker,
        name: "receipt.items.agent_info.type",
        placeholder: "type",
        key: "receipt-items-agent-info-type",
        options: AgentInfoTypeHandbook,
    },
    //paying agent
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.paying_agent.operation",
        placeholder: "paying_agent",
        key: "receipt-items-operation-info-paying-agent-operation",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.paying_agent.phones",
        placeholder: "phones",
        key: "receipt-items-operation-info-paying-agent-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.receive_payments_operator",
        placeholder: "receive_payments_operator",
        key: "receipt-items-operation-info-receive-payments-operator",
    },
    //Money transfer operator
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.phones",
        placeholder: "phones",
        key: "receipt-items-agent-info-money-transfer-operator-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.name",
        placeholder: "name",
        key: "receipt-items-agent-info-money-transfer-operator-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.address",
        placeholder: "address",
        key: "receipt-items-agent-info-money-transfer-operator-address",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.inn",
        placeholder: "inn",
        key: "receipt-items-agent-info-money-transfer-operator-inn",
    },
    //supplier info
    {
        type: FormFieldType.input,
        name: "receipt.items.supplier_info.phones",
        placeholder: "phones",
        key: "receipt-items-supplier-info-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.supplier_info.name",
        placeholder: "name",
        key: "receipt-items-supplier-info-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.supplier_info.inn",
        placeholder: "inn",
        key: "receipt-items-supplier-info-inn",
    },
    //
    {
        type: FormFieldType.input,
        name: "receipt.items.user_data",
        placeholder: "user_data",
        key: "receipt-items-user-data",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.excise",
        placeholder: "excise",
        key: "receipt-items-excise",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.country_code",
        placeholder: "country_code",
        key: "receipt-items-country-code",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.declaration_number",
        placeholder: "declaration_number",
        key: "receipt-items-country-declaration-number",
    },
];


export const ReceiptFFD1_05FieldsMap = [
    //client
    {
        type: FormFieldType.subTitle,
        name: "Client",
        placeholder: "Client",
        key: "receipt-client",
    },
    {
        type: FormFieldType.input,
        name: "receipt.client.name",
        placeholder: "name",
        key: "receipt-client-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.client.inn",
        placeholder: "inn",
        key: "receipt-client-inn",
    },
    {
        type: FormFieldType.input,
        name: "receipt.client.email",
        placeholder: "email",
        key: "receipt-client-email",
    },
    {
        type: FormFieldType.input,
        name: "receipt.client.phone",
        placeholder: "phone",
        key: "receipt-client-phone",
    },
    
    //company
    {
        type: FormFieldType.subTitle,
        name: "Company",
        placeholder: "Company",
        key: "receipt-company",
    },
    {
        type: FormFieldType.input,
        name: "receipt.company.email",
        placeholder: "email",
        key: "receipt-company-email",
    },
    {
        type: FormFieldType.picker,
        name: "receipt.company.sno",
        placeholder: "sno",
        key: "receipt-company-sno",
        options: SnoHandbook,
    },
    {
        type: FormFieldType.input,
        name: "receipt.company.inn",
        placeholder: "inn",
        key: "receipt-company-inn",
    },
    {
        type: FormFieldType.input,
        name: "receipt.company.payment_address",
        placeholder: "payment_address",
        key: "receipt-company-payment_address",
    },
    
    //agent_info
    {
        type: FormFieldType.subTitle,
        name: "Agent info",
        placeholder: "Agent info",
        key: "receipt-agent-info",
    },
    {
        type: FormFieldType.picker,
        name: "receipt.agent_info.type",
        placeholder: "type",
        key: "receipt-agent_info-type",
        options: AgentInfoTypeHandbook,
    },
    
    //payingAgent
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.paying_agent.operation",
        placeholder: "operation",
        key: "receipt-agent-info-paying-agent-operation",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.paying_agent.phones",
        placeholder: "phones",
        key: "receipt-agent-info-paying-agent-phones",
    },
    //Receive payment operator
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.receive_payments_operator.phones",
        placeholder: "phones",
        key: "receipt-agent-info-receive-payments-operator-phones",
    },
    //Money transfer operator
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.phones",
        placeholder: "phones",
        key: "receipt-agent_info.money-transfer-operator-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.name",
        placeholder: "name",
        key: "receipt-agent_info.money-transfer-operator-names",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.address",
        placeholder: "address",
        key: "receipt-agent_info.money-transfer-operator-address",
    },
    {
        type: FormFieldType.input,
        name: "receipt.agent_info.money_transfer_operator.inn",
        placeholder: "inn",
        key: "receipt-agent_info.money-transfer-operator-inn",
    },
    
    //supplierInfo
    {
        type: FormFieldType.subTitle,
        name: "Supplier info",
        placeholder: "Supplier info",
        key: "receipt-supplier-info",
    },
    {
        type: FormFieldType.input,
        name: "receipt.supplier_info.phones",
        placeholder: "phones",
        key: "receipt-supplier-info-phones",
    },
    
    //items
    {
        type: FormFieldType.subTitle,
        name: "Items",
        placeholder: "Items",
        key: "receipt-items",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.name",
        placeholder: "name",
        key: "receipt-items-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.price",
        placeholder: "price",
        key: "receipt-items-price",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.quantity",
        placeholder: "quantity",
        key: "receipt-items-quantity",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.measurement_unit",
        placeholder: "measurement_unit",
        key: "receipt-items-measurement_unit",
    },
    {
        type: FormFieldType.picker,
        name: "receipt.items.payment_method",
        placeholder: "payment_method",
        key: "receipt-items-payment-method",
        options: PaymentMethodTypeHandbook,
    },
    {
        type: FormFieldType.picker,
        name: "receipt.items.payment_object",
        placeholder: "payment_object",
        key: "receipt-items-payment-object",
        options: PaymentObjectFFD1_05,
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.nomenclature_code",
        placeholder: "nomenclature_code",
        key: "receipt-items-nomenclature-code",
        options: PaymentObjectFFD1_05,
    },
    
    //vat
    {
        type: FormFieldType.picker,
        name: "receipt.items.vat.type",
        placeholder: "type",
        key: "receipt-items-vat-type",
        options: VatTypeHandbook,
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.vat.sum",
        placeholder: "sum",
        key: "receipt-items-vat-sum",
    },
    //agent_info
    {
        type: FormFieldType.picker,
        name: "receipt.items.agent_info.type",
        placeholder: "type",
        key: "receipt-items-agent-info-type",
        options: AgentInfoTypeHandbook,
    },
    //paying agent
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.paying_agent.operation",
        placeholder: "paying_agent",
        key: "receipt-items-operation-info-paying-agent-operation",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.paying_agent.phones",
        placeholder: "phones",
        key: "receipt-items-operation-info-paying-agent-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.receive_payments_operator",
        placeholder: "receive_payments_operator",
        key: "receipt-items-operation-info-receive-payments-operator",
    },
    //Money transfer operator
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.phones",
        placeholder: "phones",
        key: "receipt-items-agent-info-money-transfer-operator-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.name",
        placeholder: "name",
        key: "receipt-items-agent-info-money-transfer-operator-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.address",
        placeholder: "address",
        key: "receipt-items-agent-info-money-transfer-operator-address",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.agent_info.money_transfer_operator.inn",
        placeholder: "inn",
        key: "receipt-items-agent-info-money-transfer-operator-inn",
    },
    //supplier info
    {
        type: FormFieldType.input,
        name: "receipt.items.supplier_info.phones",
        placeholder: "phones",
        key: "receipt-items-supplier-info-phones",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.supplier_info.name",
        placeholder: "name",
        key: "receipt-items-supplier-info-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.supplier_info.inn",
        placeholder: "inn",
        key: "receipt-items-supplier-info-inn",
    },
    //
    {
        type: FormFieldType.input,
        name: "receipt.items.user_data",
        placeholder: "user_data",
        key: "receipt-items-user-data",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.excise",
        placeholder: "excise",
        key: "receipt-items-excise",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.country_code",
        placeholder: "country_code",
        key: "receipt-items-country-code",
    },
    {
        type: FormFieldType.input,
        name: "receipt.items.declaration_number",
        placeholder: "declaration_number",
        key: "receipt-items-country-declaration-number",
    },
    
    {
        type: FormFieldType.picker,
        name: "receipt.payments.type",
        placeholder: "type",
        key: "receipt-payments.type",
        options: PaymentsTypeHandbook,
    },
    {
        type: FormFieldType.input,
        name: "receipt.payments.sum",
        placeholder: "sum",
        key: "receipt-payments-sum",
    },
    {
        type: FormFieldType.picker,
        name: "receipt.vats.type",
        placeholder: "type",
        key: "receipt-vats-type",
        options: VatTypeHandbook,
    },
    {
        type: FormFieldType.input,
        name: "receipt.total",
        placeholder: "total",
        key: "receipt-total",
    },
    {
        type: FormFieldType.input,
        name: "receipt.additional_check_props",
        placeholder: "additional_check_props",
        key: "receipt-additional-check-props",
    },
    {
        type: FormFieldType.input,
        name: "receipt.cashier",
        placeholder: "cashier",
        key: "receipt-cashier",
    },
    {
        type: FormFieldType.input,
        name: "receipt.additional_user_props.name",
        placeholder: "name",
        key: "receipt-additional-user-props-name",
    },
    {
        type: FormFieldType.input,
        name: "receipt.additional_user_props.value",
        placeholder: "value",
        key: "receipt-additional-user-props-value",
    },
];