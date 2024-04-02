import { Patient } from "./patient";

export class Billing {

  billingId!: number;
  dateTime: Date = new Date();
  ot_Fee: number=0;
  medicineFee: number=0;
  consultancyFee: number=0;
  bedCharge: number=0;
  serviceCharge: number=0;
  othersFee: number=0;

  amount: number = 0;
  discount: number = 0;
  netAmount: number = 0;
  paidAmount: number = 0;
  balanceDue: number = 0;


  patientID!: number;
  patient!: Patient;
 
}
