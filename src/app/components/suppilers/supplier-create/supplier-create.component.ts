import { Component } from '@angular/core';
import { Supplier } from '../../../models/supplier';
import { SupplierService } from '../../../services/supplier.service';
import { Router } from '@angular/router';
import { InventoryItem } from '../../../models/inventory-item';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrl: './supplier-create.component.css'
})
export class SupplierCreateComponent {
  public model!: Supplier;


  constructor(private Service: SupplierService, private router: Router) {

  }
  ngOnInit(): void {


    this.model = new Supplier();

  }


  OnSubmit() {

    this.Service.SaveSupplier(this.model).subscribe({
      next: () => {
        this.router.navigate(["SupplierList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  AddItems() {

    this.model.inventoryItems.push(new InventoryItem());

  }

  DeleteItems(index: number) {

    const remItem = this.model.inventoryItems.splice(index, 1);
  }
}
