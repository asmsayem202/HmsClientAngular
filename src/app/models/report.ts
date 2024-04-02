import { Patient } from "./patient";
import { ReportType } from "./report-type";

export class Report {
  reportId!: number;
  title!: string;
  creationDate: Date = new Date();
  reportAuthor!: string;
  reportContent!: string;

  patientID!: number;
  patient!: Patient;
  reportTypeID!: number;
  reportType!: ReportType
}
