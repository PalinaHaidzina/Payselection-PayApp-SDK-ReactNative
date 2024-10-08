import {Field} from "@/constants/fieldList";
import {PaymentMethod} from "@/types/types";

export const getDefaultValues = (name: string) => {
    switch (name) {
        case "ReceiptData.receipt.items":
            return { name: '', price: '', quantity: '', sum: '', vat: { type: '', sum: '' }, agent_info: {}, supplier_info: {} };
        case "ReceiptData.payments":
            return { method: '', amount: '' };
        case "ReceiptData.receipt.agent_info.paying_agent.phones":
        case "ReceiptData.receipt.agent_info.receive_payments_operator.phones":
        case "ReceiptData.receipt.agent_info.money_transfer_operator.phones":
        case "ReceiptData.receipt.supplier_info.phones":
            return [''];
        default:
            return {};
    }
};

export function defineFieldsList (paymentMethod: PaymentMethod, fieldsList: Field[]) {
    if (paymentMethod === PaymentMethod.Token) {
        console.log("fields.filter(item => item.key !== PaymentDetails.Value: ", fields.filter(item => item.key !== "PaymentDetails.Value"));
        return fieldsList.filter(item => item.key !== "PaymentDetails.Value");
    }
    if (paymentMethod !== PaymentMethod.CryptogramRSA && paymentMethod !== PaymentMethod.Cryptogram) {
        return fieldsList.filter(item => item.key !== "PaymentDetails.Type" && item.key !== "PaymentDetails.PayToken" && item.key !== "PaymentDetails.Value");
    } else {
        return fieldsList.filter(item => item.key !== "PaymentDetails.Type" && item.key !== "PaymentDetails.PayToken");
    }
}

export function generateXRequestId(): string {
    const timestamp = Date.now().toString();
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${randomString}-${timestamp}`;
}
