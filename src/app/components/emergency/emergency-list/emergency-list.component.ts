import { Component, OnInit } from '@angular/core';
import { Emergency } from '../../../models/emergency';
import { EmergencyService } from '../../../services/emergency.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-emergency-list',
  templateUrl: './emergency-list.component.html',
  styleUrl: './emergency-list.component.css'
})
export class EmergencyListComponent implements OnInit {

  public emergency: Emergency[] = [];
  public pageSettings: PageSettingsModel = { pageSize: 5 };
  public filterSettings: FilterSettingsModel = { type: 'FilterBar' };

  public toolbarOptions?: ToolbarItems[] = ['Search',
    /* 'Print',*/
    'ColumnChooser',
    //'PdfExport',
    //'ExcelExport',
    //'CsvExport'
  ];

  constructor(private service: EmergencyService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetEmergencys().subscribe((response: Emergency[]) => {
      this.emergency = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  deleteEmergency(emargency: Emergency) {
    let confirmDelete: boolean = confirm(`Delete ${emargency.emergencyId}?`);
    if (confirmDelete) {
      this.service.DeleteEmergency(emargency.emergencyId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
