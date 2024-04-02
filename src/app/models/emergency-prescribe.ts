import { Emergency } from "./emergency";

export class EmergencyPrescribe {
  emergencyID!: number;
  symptoms!: string;

  followupDate: Date = new Date();

  followupNotes?: string;
  emergency!: Emergency;
  emergencyPrescribeDetails: EmergencyPrescribeDetails[] = [];
}

export class EmergencyPrescribeDetails {
  emergencyPrescribeDetailsId!: number;
  emergencyID!: number;
  medication!: string;
  dosgae?: string;
  instructions?: string;
  emergencyPrescribe!: EmergencyPrescribe;
}
