import { Component } from '@angular/core';
import { Nurse } from '../../../models/nurse';
import { NurseService } from '../../../services/nurse.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-nurse-list',
  templateUrl: './nurse-list.component.html',
  styleUrl: './nurse-list.component.css'
})
export class NurseListComponent {
  public nurse: Nurse[] = [];

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

  constructor(private nurseService: NurseService) {

  }
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.nurseService.getAllNurses().subscribe((response: Nurse[]) => {
      this.nurse = response;
      console.log(response);
    },
      (error) => {
        console.log('Observable emitted an error:' + error);

      });
  }

  deleteNurse(nurse: Nurse) {
    let confirmDelete: boolean = confirm(`Delete: ${nurse.name}?`);

    if (confirmDelete) {

      this.nurseService.deleteNurse(nurse.nurseId).subscribe(() => {
        
        this.LoadData();
      },
        (error) => {
          console.log('Observable emitted an error:' + error);
        });
    }

  }
}
