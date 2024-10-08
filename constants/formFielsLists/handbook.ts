export const paymentTypesHandbook = [
    { label: "Cryptogram", value: "Cryptogram" },
    { label: "Token", value: "Token" },
    { label: "QR", value: "QR" },
    { label: "ExternalForm", value: "ExternalForm" },
    { label: "SberPay", value: "SberPay" },
    { label: "CryptogramRSA", value: "CryptogramRSA" },
];

export const receiptPaymentTypeHandbook = [
    { label: "FFD1_05", value: "FFD1_05"},
    { label: "FFD1_2", value: "FFD1_2"},
]

export const booleanHandbook = [
    { label: "true", value: true },
    { label: "false", value: false },
]

export const SnoHandbook = [
    { label: "osn", value: "osn"},
    { label: "usn_income", value: "usn_income"},
    { label: "usn_income_outcome", value: "usn_income_outcome"},
    { label: "envd", value: "envd"},
    { label: "esn", value: "esn"},
    { label: "patent", value: "patent"},
]

export const AgentInfoTypeHandbook = [
    { label: "bank_paying_agent", value: "bank_paying_agent"},
    { label: "bank_paying_subagent", value: "bank_paying_subagent"},
    { label: "paying_agent", value: "paying_agent"},
    { label: "paying_subagent", value: "paying_subagent"},
    { label: "attorney", value: "attorney"},
    { label: "commission_agent", value: "commission_agent"},
    { label: "another", value: "another"},
]

export const PaymentMethodTypeHandbook = [
    { label: "full_prepayment", value: "full_prepayment"},
    { label: "prepayment", value: "prepayment"},
    { label: "advance", value: "advance"},
    { label: "full_payment", value: "full_payment"},
    { label: "partial_payment", value: "partial_payment"},
    { label: "credit", value: "credit"},
    { label: "credit_payment", value: "credit_payment"},
]

export const PaymentObjectFFD1_05 = [
    { label: "commodity", value: "commodity"},
    { label: "excise", value: "excise"},
    { label: "job", value: "job"},
    { label: "service", value: "service"},
    { label: "gambling_bet", value: "gambling_bet"},
    { label: "gambling_prize", value: "gambling_prize"},
    { label: "lottery", value: "lottery"},
    { label: "lottery_prize", value: "lottery_prize"},
    { label: "intellectual_activity", value: "intellectual_activity"},
    { label: "payment", value: "payment"},
    { label: "agent_commission", value: "agent_commission"},
    { label: "composite", value: "composite"},
    { label: "award", value: "award"},
    { label: "another", value: "another"},
    { label: "property_right", value: "property_right"},
    { label: "non-operating_gain", value: "non-operating_gain"},
    { label: "insurance_premium", value: "insurance_premium"},
    { label: "sales_tax", value: "sales_tax"},
    { label: "resort_fee", value: "resort_fee"},
    { label: "deposit", value: "deposit"},
    { label: "expense", value: "expense"},
    { label: "pension_insurance_ip", value: "pension_insurance_ip"},
    { label: "pension_insurance", value: "pension_insurance"},
    { label: "medical_insurance_ip", value: "medical_insurance_ip"},
    { label: "medical_insurance", value: "medical_insurance"},
    { label: "social_insurance", value: "social_insurance"},
    { label: "casino_payment", value: "casino_payment"},
]

export const VatTypeHandbook = [
    { label: "none", value: "none"},
    { label: "vat0", value: "vat0"},
    { label: "vat10", value: "vat10"},
    { label: "vat110", value: "vat110"},
    { label: "vat20", value: "vat20"},
    { label: "vat120", value: "vat120"},
];

export const PaymentsTypeHandbook = [
    { label: "cash", value: 0},
    { label: "nonCash", value: 1},
    { label: "prepayment", value: 2},
    { label: "postPayment", value: 3},
    { label: "other", value: 4},
];

export const PaymentObjectFFD1_2Handbook = [
    { label: "regularGoods", value: 1 },
    { label: "exciseGoods", value: 2 },
    { label: "workPerformed", value: 3 },
    { label: "serviceProvided", value: 4 },
    { label: "bettingAcceptance", value: 5 },
    { label: "bettingPayout", value: 6 },
    { label: "lotteryTicketSales", value: 7 },
    { label: "lotteryPayout", value: 8 },
    { label: "intellectualPropertyUsage", value: 9 },
    { label: "advancePayment", value: 10 },
    { label: "userCommission", value: 11 },
    { label: "penaltyPayment", value: 12 },
    { label: "OtherTransactionType", value: 13 },
    { label: "propertyRightsTransfer", value: 14 },
    { label: "nonOperatingIncome", value: 15 },
    { label: "taxDeductibleExpenses", value: 16 },
    { label: "tradeFeePayment", value: 17 },
    { label: "resortFee", value: 18 },
    { label: "pawn", value: 19 },
    { label: "expenseReduction", value: 20 },
    { label: "pensionInsuranceIP", value: 21 },
    { label: "pensionInsuranceOrg", value: 22 },
    { label: "medicalInsuranceIP", value: 23 },
    { label: "medicalInsuranceOrg", value: 24 },
    { label: "socialInsurance", value: 25 },
    { label: "casinoTransactions", value: 26 },
    { label: "bankAgentCashDisbursement", value: 27 },
    { label: "exciseGoodsUnmarked", value: 30 },
    { label: "exciseGoodsMarked", value: 31 },
    { label: "markedGoodsUnmarked", value: 32 },
    { label: "markedGoodsMarked", value: 33 }
];