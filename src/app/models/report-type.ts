import { Report } from "./report";

export class ReportType {
  reportTypeId!: number;
  name!: string;
  reportID?: number;
  report!: Report;
}
