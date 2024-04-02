import { ImageUpload } from "./image-upload";

export class Staff {
  staffId!: number;
  staffName!: string;
  designation!: string;
  address?: string;
  contactNo!: string;
  email!: string;
  shift!: ShiftType;

  imagePath: string = '';

  imageUpload: ImageUpload = new ImageUpload();
}


export enum ShiftType {
  Morning = 0,
  Evening = 1,
  Night = 2
}
