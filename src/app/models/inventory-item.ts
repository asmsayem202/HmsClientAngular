import { Supplier } from "./supplier";

export class InventoryItem {
  inventoryItemId!: number;
  name!: string;
  price!: number;
  quantity!: number;
  category!: string;
  supplierID?: number;
  supplier!: Supplier;
}
