import { Component } from '@angular/core';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-ward-list',
  templateUrl: './ward-list.component.html',
  styleUrl: './ward-list.component.css'
})
export class WardListComponent {
  public model: Ward[] = [];

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

  constructor(private service: WardService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetWards().subscribe((response: Ward[]) => {
      this.model = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteWard(ward: Ward) {
    let confirmDelete: boolean = confirm(`Delete ${ward.name}?`);
    if (confirmDelete) {
      this.service.DeleteWard(ward.wardId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
