import { Department } from "./department";
import { ImageUpload } from "./image-upload";

export class Doctor {
  doctorId!: number;
  name!: string;
  specialization!: string;
  contactNo!: string;
  email!: string;
  schedule?: string;
  shift!: ShiftType;
  departmentID?: number;
  department!: Department;

  imagePath: string = '';

  imageUpload: ImageUpload = new ImageUpload();
}
export enum ShiftType {
  Morning = 0,
  Evening = 1,
  Night = 2
}
