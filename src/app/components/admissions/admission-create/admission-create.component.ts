import { Component } from '@angular/core';
import { Admission } from '../../../models/admission';
import { Appointment } from '../../../models/appointment';
import { Emergency } from '../../../models/emergency';
import { Ward } from '../../../models/ward';
import { AdmissionService } from '../../../services/admission.service';
import { CommonApiService } from '../../../services/common.api.service';
import { Router } from '@angular/router';
import { Nurse } from '../../../models/nurse';
import { Room } from '../../../models/room';

@Component({
  selector: 'app-admission-create',
  templateUrl: './admission-create.component.html',
  styleUrl: './admission-create.component.css'
})
export class AdmissionCreateComponent {
  public model!: Admission;
  public appointments!: Appointment[];
  public emergencys!: Emergency[];
  public ward!: Ward[];
  public nurse!: Nurse[];
  public allnurse!: Nurse[];
  public room!: Room[];
  public allroom!: Room[];

  constructor(private service: AdmissionService, private CommonApi: CommonApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.model = new Admission();

    this.CommonApi.GetAppointment().subscribe((data) => {
      this.appointments = data;
    });
    this.CommonApi.GetEmergency().subscribe((data) => {
      this.emergencys = data;
    });
    this.CommonApi.GetWard().subscribe((data) => {
      this.ward = data;
    });
    this.CommonApi.GetNurse().subscribe((data) => {
      this.nurse = data;
      this.allnurse = data;
    });
    this.CommonApi.GetRoom().subscribe((data) => {
      this.room = data;
      this.allroom = data;
    });



  }

  OnSubmit() {
    //console.log(this.model);
    //alert(JSON.stringify(this.model));
    this.service.SaveAdmission(this.model).subscribe({
      next: () => {
        this.router.navigate(["AdmissionList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }


  WardChangeNg() {

    this.nurse = this.allnurse.filter(
      nur => nur.wardID == this.model.wardID);


    this.room = this.allroom.filter(
      rm => rm.wardID == this.model.wardID);
  }
}
