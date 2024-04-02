import { ImageUpload } from "./image-upload";
import { Ward } from "./ward";

export class Nurse {
  nurseId!: number;
  name!: string;
  contactNo!: string;
  shift!: string;
  imagePath: string = '';

  imageUpload: ImageUpload = new ImageUpload();
  wardID!: number;
  ward!: Ward;
}
export enum ShiftType {
  Morning = 0,
  Evening = 1,
  Night = 2
}
