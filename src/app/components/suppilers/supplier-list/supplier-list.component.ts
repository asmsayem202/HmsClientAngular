import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../models/supplier';
import { SupplierService } from '../../../services/supplier.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent implements OnInit {
  public supplier: Supplier[] = [];

  public pageSettings: PageSettingsModel = { pageSize: 5 };
  public filterSettings: FilterSettingsModel = { type: 'FilterBar' };

  public toolbarOptions?: ToolbarItems[] = ['Search',
    //'Print',
    'ColumnChooser',
    //'Add', 'Edit', 'Delete', 'Update', 'Cancel',
    //'PdfExport',
    //'ExcelExport',
    //'CsvExport'
  ];

  constructor(private service: SupplierService) {

  }
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetSuppliers().subscribe((response: Supplier[]) => {
      this.supplier = response;
      console.log(response);
    },
      (error) => {
        console.log('Observable emitted an error:' + error);

      });
  }

  DeleteSupplier(supplier: Supplier) {
    let confirmDelete: boolean = confirm(`Delete: ${supplier.name}?`);

    if (confirmDelete) {

      this.service.DeleteSupplier(supplier.supplierId).subscribe(() => {
        this.LoadData();
      },
        (error) => {
          console.log('Observable emitted an error:' + error);
        });
    }
  }


}
