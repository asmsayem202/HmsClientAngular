import { Component } from '@angular/core';
import { Doctor } from '../../../models/doctor';
import { DoctorService } from '../../../services/doctor.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { WebReportService } from '../../../services/web-report.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {
  public doctor: Doctor[] = [];
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
  constructor(private doctorService: DoctorService, private reportService: WebReportService) {

  }
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.doctorService.getAllDoctors().subscribe((response: Doctor[]) => {
      this.doctor = response;
      console.log(response);
    },
      (error) => {
        console.log('Observable emitted an error:' + error);

      });
  }

  deleteDoctor(doctor: Doctor) {
    let confirmDelete: boolean = confirm(`Delete: ${doctor.name}?`);

    if (confirmDelete) {

      this.doctorService.deleteDoctor(doctor.doctorId).subscribe(() => {
        alert('test');
        this.LoadData();
      },
        (error) => {
          console.log('Observable emitted an error:' + error);
        });
    }

  }


  /*  for report view*/
  LoadReport() {

    this.reportService.GetReport().subscribe((data) => {

      const basedata = "data:application/pdf;base64," + data;
      this.downloadFileObject(basedata);

    }, (error) => {
      console.log('Observable emitted an error: ' + JSON.stringify(error));
    });
  }
  downloadFileObject(base64String: string) {
    const linkSource = base64String;
    const downloadLink = document.createElement("a");
    const fileName = "ConvertedPDFFile.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
