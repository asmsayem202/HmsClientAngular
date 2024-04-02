import { Component, OnInit } from '@angular/core';
import { Emergency } from '../../../models/emergency';
import { EmergencyService } from '../../../services/emergency.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../../models/patient';
import { Department } from '../../../models/department';
import { Doctor } from '../../../models/doctor';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-emergency-edit',
  templateUrl: './emergency-edit.component.html',
  styleUrl: './emergency-edit.component.css'
})
export class EmergencyEditComponent implements OnInit {
  public model!: Emergency;
  id!: number;
  public patients!: Patient[];
  public departments!: Department[];
  public doctors!: Doctor[];
  public allDoctors!: Doctor[];

  constructor(private Service: EmergencyService, private CommonApi: CommonApiService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();
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


    this.Service.UpdateEmergency(this.model).subscribe({
      next: () => {
        this.router.navigate(["EmergencyList"]);
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    

  }

  LoadData() {
    this.Service.GetEmergency(this.id).subscribe((data: Emergency) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
}
