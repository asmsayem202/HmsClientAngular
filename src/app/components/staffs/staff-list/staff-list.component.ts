import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models/staff';
import { StaffService } from '../../../services/staff.service';
import { EditSettingsModel, FilterSettingsModel, PageSettingsModel, SearchSettingsModel, SelectionSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent implements OnInit {
  staffList: Staff[] = [];


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

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.getStaffList();
    //this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    //this.selectionOptions = { mode: 'Row', type: 'Single' };
    //this.searchOptions = { fields: ['staffId', 'staffName','designation'], operator: 'contains', ignoreCase: true, ignoreAccent: true };
  }

  getStaffList(): void {
    this.staffService.getAllStaffs().subscribe(
      staffList => this.staffList = staffList,
      error => console.error('Error fetching staff list: ', error)
    );
  }

  deleteStaff(staff: Staff): void {
    let confirmDelete: boolean = confirm(`Delete ${staff.staffName}?`);
    if (confirmDelete) {
      this.staffService.deleteStaff(staff.staffId).subscribe(() => {
        this.getStaffList();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }    
  }
}
