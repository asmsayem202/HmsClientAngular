import { Component } from '@angular/core';
import { Admission } from '../../../models/admission';
import { AdmissionService } from '../../../services/admission.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrl: './admission-list.component.css'
})
export class AdmissionListComponent {
  public admissions: Admission[] = [];
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

  constructor(private service: AdmissionService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetAdmissions().subscribe((response: Admission[]) => {
      this.admissions = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  DeleteAdmission(admissions: Admission) {
    let confirmDelete: boolean = confirm(`Delete ${admissions.admissionId}?`);
    if (confirmDelete) {
      this.service.DeleteAdmission(admissions.admissionId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
