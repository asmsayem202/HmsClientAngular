import { InventoryItem } from "./inventory-item";

export class Supplier {
  supplierId!: number;
  name!: string;
  email!: string;
  contactNo!: string;
  address?: string;

  inventoryItems: InventoryItem[] = [];
}
