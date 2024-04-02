import { Component } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { StaffService } from '../../services/staff.service';
import { DepartmentsService } from '../../services/departments.service';
import { DoctorService } from '../../services/doctor.service';
import { WardService } from '../../services/ward.service';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  patientCount: number = 0;
  staffCount: number = 0;
  departmentCount: number = 0;
  doctorCount: number = 0;
  wardCount: number = 0;
  supplierCount: number = 0;


  constructor(private patientsService: PatientsService, private staffService: StaffService, private departmentService: DepartmentsService, private doctorService: DoctorService, private wardService: WardService, private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getPatientCount();
    this.getStaffCount();
    this.getDepartmentCount();
    this.getDoctorCount();
    this.getWardCount();
    this.getSupplierCount();
  }

  getPatientCount(): void {
    this.patientsService.GetPatients().subscribe(patient => {
      this.patientCount = patient.length;
    });
  }
  getStaffCount(): void {
    this.staffService.getAllStaffs().subscribe(staffs => {
      this.staffCount = staffs.length;
    });
  }
  getDepartmentCount(): void {
    this.departmentService.GetDepartments().subscribe(defartments => {
      this.departmentCount = defartments.length;
    });
  }
  getDoctorCount(): void {
    this.doctorService.getAllDoctors().subscribe(doctor => {
      this.doctorCount = doctor.length;
    });
  }
  getWardCount(): void {
    this.wardService.GetWards().subscribe(ward => {
      this.wardCount = ward.length;
    });
  }
  getSupplierCount(): void {
    this.supplierService.GetSuppliers().subscribe(sup => {
      this.supplierCount = sup.length;
    });
  } 

}
