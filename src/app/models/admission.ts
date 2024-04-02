import { Appointment } from "./appointment";
import { Emergency } from "./emergency";
import { Nurse } from "./nurse";
import { Room } from "./room";
import { Ward } from "./ward";

export class Admission {

  admissionType!: string ;
  admissionId !: number;
  admissionDate: Date = new Date();
  appointmentID ?: number;
  emergencyID ?: number;
  wardID !: number;
  nurseID !: number;
  roomID !: number;
  appointment!: Appointment;
  emergency!: Emergency;
  ward!: Ward;
  nurse!: Nurse;
  room!: Room;
}


