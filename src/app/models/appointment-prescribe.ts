import { Appointment } from "./appointment";

export class AppointmentPrescribe {
  appointmentID!: number;
  symptoms: string = '';

  //medication!: string;
  //dosgae?: string;
  //instructions?: string;
  followupDate: Date = new Date();

  followupNotes?: string;
  appointment!: Appointment;
  appointmentPrescribeDetails: AppointmentPrescribeDetails[] = [];


}
export class AppointmentPrescribeDetails {
  appointmentPrescribeDetailsId!: number;
  appointmentID!: number;
  medication!: string;
  dosgae?: string;
  instructions?: string;
  appointmentPrescribe!: AppointmentPrescribe;
}
