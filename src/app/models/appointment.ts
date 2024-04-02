import { AppointmentPrescribe } from "./appointment-prescribe";
import { AppointmentType } from "./appointment-type";
import { Department } from "./department";
import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
  appointmentId!: number;
  patientID!: number;
  doctorID!: number;
  departmentID!: number;
  appointmentDate: Date = new Date();
  appointmentTypeID!: number;
  description!: string;
  severity!: string;


  appointmentType!: AppointmentType;
  patient!: Patient;
  doctor!: Doctor;
  department!: Department;
  appointmentPrescribe!: AppointmentPrescribe;
}
