import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../models/discharge';
import { DischargeService } from '../../../services/discharge.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-discharge-list',
  templateUrl: './discharge-list.component.html',
  styleUrl: './discharge-list.component.css'
})
export class DischargeListComponent implements OnInit {

  public discharge: Discharge[] = [];
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


  constructor(private service: DischargeService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.getAllDischarges().subscribe((response: Discharge[]) => {
      this.discharge = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  deleteDischage(discharge: Discharge) {
    let confirmDelete: boolean = confirm(`Delete?`);
    if (confirmDelete) {
      this.service.deleteDischarge(discharge.dischargeId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }

}
