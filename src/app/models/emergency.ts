import { Department } from "./department";
import { Doctor } from "./doctor";
import { EmergencyPrescribe } from "./emergency-prescribe";
import { Patient } from "./patient";

export class Emergency {
  emergencyId!: number;
  patientID!: number;
  doctorID!: number;
  departmentID!: number;
  location?: string;
  emergencyDateTime: Date = new Date();
  description?: string;
  severity?: string;

  patient!: Patient;
  doctor!: Doctor;
  department!: Department;
  emergencyPrescribe!: EmergencyPrescribe;
}
