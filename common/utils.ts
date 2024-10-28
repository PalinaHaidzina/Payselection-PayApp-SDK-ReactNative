import { Field } from "@/constants/fieldList";
import { PAYMENT_METHOD } from "@/types/paymentMethods";

export function defineFieldsList(
  paymentMethod: PAYMENT_METHOD,
  fieldsList: Field[],
) {
  if (paymentMethod === PAYMENT_METHOD.Token) {
    return fieldsList.filter((item) => item.key !== "PaymentDetails.Value");
  }
  if (
    paymentMethod !== PAYMENT_METHOD.CryptogramRSA &&
    paymentMethod !== PAYMENT_METHOD.Cryptogram
  ) {
    return fieldsList.filter(
      (item) =>
        item.key !== "PaymentDetails.Type" &&
        item.key !== "PaymentDetails.PayToken" &&
        item.key !== "PaymentDetails.Value",
    );
  } else {
    return fieldsList.filter(
      (item) =>
        item.key !== "PaymentDetails.Type" &&
        item.key !== "PaymentDetails.PayToken",
    );
  }
}

export function generateXRequestId(): string {
  const timestamp = Date.now().toString();
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${randomString}-${timestamp}`;
}
