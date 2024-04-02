import { Appointment } from "./appointment";

export class AppointmentType {
  appointmentTypeId: number = 0;
  name!: string;
  appointment: Appointment[]=[];
}
