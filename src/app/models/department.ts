import { Doctor } from "./doctor";

export class Department {

  departmentId!: number;
  name!: string;
  doctors: Doctor[] =[];
}
