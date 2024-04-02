import { Component } from '@angular/core';
import { BillingService } from '../../../services/billing.service';
import { Billing } from '../../../models/billing';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrl: './billing-list.component.css'
})
export class BillingListComponent {

  public billings: Billing[] = [];

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
  constructor(private service: BillingService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetBillings().subscribe((response: Billing[]) => {
      this.billings = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  DeleteBilling(billing: Billing) {
    let confirmDelete: boolean = confirm(`Delete ${billing.billingId}?`);
    if (confirmDelete) {
      this.service.DeleteBilling(billing.billingId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
