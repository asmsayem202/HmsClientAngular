import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../models/supplier';
import { SupplierService } from '../../../services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryItem } from '../../../models/inventory-item';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrl: './supplier-edit.component.css'
})
export class SupplierEditComponent implements OnInit {
  public model!: Supplier;
  id!: number;

  constructor(private Service: SupplierService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }


  OnSubmit() {

    this.Service.UpdateSupplier(this.model).subscribe({
      next: () => {
        this.router.navigate(["SupplierList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetSupplier(this.id).subscribe((data: Supplier) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  AddItems() {

    this.model.inventoryItems.push(new InventoryItem());
  }

  DeleteItems(index: number) {

    const remItem = this.model.inventoryItems.splice(index, 1);
  }



}
