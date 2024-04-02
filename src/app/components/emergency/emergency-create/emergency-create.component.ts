import { Component, OnInit } from '@angular/core';
import { Emergency } from '../../../models/emergency';
import { EmergencyService } from '../../../services/emergency.service';
import { Router } from '@angular/router';
import { Patient } from '../../../models/patient';
import { Department } from '../../../models/department';
import { Doctor } from '../../../models/doctor';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-emergency-create',
  templateUrl: './emergency-create.component.html',
  styleUrl: './emergency-create.component.css'
})
export class EmergencyCreateComponent implements OnInit {
  public model!: Emergency;
  public patients!: Patient[];
  public departments!: Department[];
  public doctors!: Doctor[];
  public allDoctors!: Doctor[];


  constructor(private Service: EmergencyService, private CommonApi: CommonApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.model = new Emergency();
    this.CommonApi.GetPatient().subscribe((data) => {
      this.patients = data;
    });
    this.CommonApi.GetDepartment().subscribe((data) => {
      this.departments = data;
    });
    this.CommonApi.GetDoctor().subscribe((data) => {
      this.doctors = data;
      this.allDoctors = data;
    });

  }


  DeptChangeNg() {

    this.doctors = this.allDoctors.filter(
      doc => doc.departmentID == this.model.departmentID);

  }

  OnSubmit() {
    /*  alert(JSON.stringify(this.model));*/
    this.Service.SaveEmergency(this.model).subscribe({
      next: () => {
        this.router.navigate(["EmergencyList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
