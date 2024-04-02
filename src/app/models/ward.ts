import { Nurse } from "./nurse";
import { Room } from "./room";

export class Ward {
  wardId!: number;
  name!: string;

  nurses: Nurse[] = [];
  rooms: Room[] = [];
}
