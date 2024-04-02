import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';
import { Patient } from '../../../models/patient';
import { Department } from '../../../models/department';
import { Doctor } from '../../../models/doctor';
import { AppointmentType } from '../../../models/appointment-type';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrl: './appointment-create.component.css'
})
export class AppointmentCreateComponent implements OnInit {
  public model!: Appointment;
  public patients!: Patient[];
  public departments!: Department[];
  public doctors!: Doctor[];
  public allDoctors!: Doctor[];
  public appointmentTypes!: AppointmentType[];

  constructor(private service: AppointmentService, private CommonApi: CommonApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.model = new Appointment();

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
    this.CommonApi.GetAppointmentType().subscribe((data) => {
      this.appointmentTypes = data;
    });
   

  }

  DeptChangeNg() {

    this.doctors = this.allDoctors.filter(
      doc => doc.departmentID == this.model.departmentID);

  }

  OnSubmit() {
    //console.log(this.model);
    //alert(JSON.stringify(this.model));
    this.service.SaveAppointment(this.model).subscribe({
      next: () => {
        this.router.navigate(["AppointmentList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
