import { Component } from '@angular/core';
import { Appointment } from '../../../models/appointment';
import { AppointmentService } from '../../../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';
import { Patient } from '../../../models/patient';
import { Department } from '../../../models/department';
import { Doctor } from '../../../models/doctor';
import { AppointmentType } from '../../../models/appointment-type';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrl: './appointment-edit.component.css'
})
export class AppointmentEditComponent {
  public model!: Appointment;
  id!: number;
  public patients!: Patient[];
  public departments!: Department[];
  public doctors!: Doctor[];
  public allDoctors!: Doctor[];
  public appointmentTypes!: AppointmentType[];

  constructor(private Service: AppointmentService, private CommonApi: CommonApiService, private router: Router, private route: ActivatedRoute) {

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
    this.CommonApi.GetAppointmentType().subscribe((data) => {
     
      this.appointmentTypes = data;
    });

  }



  DeptChangeNg() {

    this.doctors = this.allDoctors.filter(
      doc => doc.departmentID == this.model.departmentID);

  }


  OnSubmit() {


    this.Service.UpdateAppointment(this.model).subscribe({
      next: () => {
        this.router.navigate(["AppointmentList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  LoadData() {
    this.Service.GetAppointment(this.id).subscribe((data: Appointment) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
}
