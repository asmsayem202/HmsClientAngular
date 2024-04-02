import { Component } from '@angular/core';
import { Patient } from '../../../models/patient';
import { PatientsService } from '../../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';
import { BloodType } from '../../../models/blood-type';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrl: './patient-edit.component.css'
})
export class PatientEditComponent {
  public model!: Patient;
  id!: number;
  public bloodTypes!: BloodType[];
  public genders!: string[];
  constructor(private Service: PatientsService, private CommonApi: CommonApiService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();

    this.CommonApi.GetBloodTypes().subscribe((data) => {
      this.bloodTypes = data;
    });
    this.CommonApi.GetGenders().subscribe((data) => {
      this.genders = data;
    });
  }


  OnSubmit() {


    this.Service.UpdatePatient(this.model).subscribe({
      next: () => {
        this.router.navigate(["PatientList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetPatient(this.id).subscribe((data: Patient) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
}
