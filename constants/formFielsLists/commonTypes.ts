
export enum PAYMENT_TYPE {
    cryptogram = "Cryptogram",
    token = "Token",
    qr = "QR",
    externalForm = "ExternalForm",
    sberPay = "SberPay",
    cryptogramRSA = "CryptogramRSA",
}

export enum RECEIPT_TYPE {
    ffd1_05 = "FFD1_05",
    ffd1_2 = "FFD1_2",
}

export type FieldsType = {
    paymentType: PAYMENT_TYPE;
    receiptType: RECEIPT_TYPE;
}

export enum FormFieldType {
    input = "input",
    picker = "picker",
    array = "array",
    object = "object",
}