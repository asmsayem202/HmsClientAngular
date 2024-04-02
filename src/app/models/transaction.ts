export class Transaction {
  transactionId!: number;
  transactionDate: Date = new Date();
  description!: string;
  amount: number = 0;
  paidAmount: number = 0;
  balanceDue: number = 0;
  refTypeID!: number;
  refTypeName!: string;
}
