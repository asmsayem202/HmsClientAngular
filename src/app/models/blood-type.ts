import { Patient } from "./patient";

export class BloodType {
  bloodTypeId!: number;
  name!: string;
  patientID?: number;
  patient!: Patient;

}
