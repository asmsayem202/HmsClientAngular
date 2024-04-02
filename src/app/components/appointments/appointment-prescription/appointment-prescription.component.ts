import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';
import { Patient } from '../../../models/patient';
import { Department } from '../../../models/department';
import { Doctor } from '../../../models/doctor';
import { AppointmentType } from '../../../models/appointment-type';
import { AppointmentPrescribe, AppointmentPrescribeDetails } from '../../../models/appointment-prescribe';

@Component({
  selector: 'appointment-prescription-edit',
  templateUrl: './appointment-prescription.component.html',
  styleUrl: './appointment-prescription.component.css'
})
export class AppointmentPrescriptionComponent implements OnInit {
  public model!: Appointment;
  appointmentid!: number;
  //public patients!: Patient[];
  //public departments!: Department[];
  //public doctors!: Doctor[];
  //public appointmentTypes!: AppointmentType[];

  constructor(private Service: AppointmentService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.appointmentid = this.route.snapshot.params['id'];
    this.LoadData();
   

  }
  OnSubmit() {


    this.Service.SetPrescription(this.model).subscribe({
      next: () => {
        this.router.navigate(["AppointmentList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  async LoadData() {
    var req = await this.Service.GetPrescription(this.appointmentid);

      req.subscribe((data: Appointment) => {
      console.log(data);
      this.model = data;
      if (this.model.appointmentPrescribe == undefined || this.model.appointmentPrescribe == null) {
        this.model.appointmentPrescribe = new AppointmentPrescribe();       

      }

      

    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  AddItems() {
    if (this.model.appointmentPrescribe.appointmentPrescribeDetails == undefined || this.model.appointmentPrescribe.appointmentPrescribeDetails == null) {
      this.model.appointmentPrescribe.appointmentPrescribeDetails = [];
    }
    this.model.appointmentPrescribe.appointmentPrescribeDetails.push(new AppointmentPrescribeDetails());

  }

  DeleteItems(index: number) {

    const remItem = this.model.appointmentPrescribe.appointmentPrescribeDetails.splice(index, 1);
  }
}
