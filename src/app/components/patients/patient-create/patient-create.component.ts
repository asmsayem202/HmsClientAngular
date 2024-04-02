import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient';
import { Router } from '@angular/router';
import { PatientsService } from '../../../services/patients.service';
import { CommonApiService } from '../../../services/common.api.service';
import { BloodType } from '../../../models/blood-type';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrl: './patient-create.component.css'
})
export class PatientCreateComponent implements OnInit {
  public model!: Patient;
  public bloodTypes!: BloodType[];
  public genders!: string[];

  constructor(private Service: PatientsService, private router: Router, private  CommonApi:CommonApiService) {

  }
  ngOnInit(): void {
    this.model = new Patient();
    this.CommonApi.GetBloodTypes().subscribe((data) => {
      this.bloodTypes = data;
    });
    this.CommonApi.GetGenders().subscribe((data) => {
      this.genders = data;
    });

  }


  OnSubmit() {

    this.Service.SavePatient(this.model).subscribe({
      next: () => {
        this.router.navigate(["PatientList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
