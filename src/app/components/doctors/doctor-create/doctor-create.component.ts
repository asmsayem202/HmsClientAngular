import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../models/doctor';
import { DoctorService } from '../../../services/doctor.service';
import { CommonApiService } from '../../../services/common.api.service';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../../services/departments.service';
import { Department } from '../../../models/department';
import { ShiftType } from '../../../models/staff';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrl: './doctor-create.component.css'
})
export class DoctorCreateComponent implements OnInit {
  public model: Doctor = new Doctor();
  public shiftTypes: string[] = [];
  public departments: Department[] = [];

  constructor(
    private doctorService: DoctorService,
    private deptService: DepartmentsService,
    private commonService: CommonApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.model = new Doctor();
    this.commonService.GetShiftTypes().subscribe((data: string[]) => {
      this.shiftTypes = data;
    });
    this.deptService.GetDepartments().subscribe((data) => {
      this.departments = data;
    });
  }

  OnSubmit(): void {
    this.doctorService.createDoctor(this.model).subscribe({
      next: () => {
        this.router.navigate(['/DoctorList']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  uploadImage(imageInput: any) {
    var file: File = imageInput.files[0];
    if (file.size > 200 * 1024) {
      alert('max allowed size is 200KB');
      return;
    }
    this.model.imageUpload.getBase64(file);

  }
}
