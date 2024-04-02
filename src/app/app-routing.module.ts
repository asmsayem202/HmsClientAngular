import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patients/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patients/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patients/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { EmergencyListComponent } from './components/emergency/emergency-list/emergency-list.component';
import { EmergencyCreateComponent } from './components/emergency/emergency-create/emergency-create.component';
import { EmergencyEditComponent } from './components/emergency/emergency-edit/emergency-edit.component';
import { AppointmentListComponent } from './components/appointments/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './components/appointments/appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './components/appointments/appointment-edit/appointment-edit.component';
import { DepartmentListComponent } from './components/departments/department-list/department-list.component';
import { DepartmentCreateComponent } from './components/departments/department-create/department-create.component';
import { DepartmentDetailsComponent } from './components/departments/department-details/department-details.component';
import { DepartmentEditComponent } from './components/departments/department-edit/department-edit.component';
import { WardListComponent } from './components/wards/ward-list/ward-list.component';
import { WardCreateComponent } from './components/wards/ward-create/ward-create.component';
import { WardDetailsComponent } from './components/wards/ward-details/ward-details.component';
import { WardEditComponent } from './components/wards/ward-edit/ward-edit.component';
import { AdmissionListComponent } from './components/admissions/admission-list/admission-list.component';
import { AdmissionEditComponent } from './components/admissions/admission-edit/admission-edit.component';
import { AdmissionCreateComponent } from './components/admissions/admission-create/admission-create.component';
import { SupplierListComponent } from './components/suppilers/supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './components/suppilers/supplier-create/supplier-create.component';
import { SupplierDetailsComponent } from './components/suppilers/supplier-details/supplier-details.component';
import { SupplierEditComponent } from './components/suppilers/supplier-edit/supplier-edit.component';
import { StaffListComponent } from './components/staffs/staff-list/staff-list.component';
import { StaffCreateComponent } from './components/staffs/staff-create/staff-create.component';
import { StaffDetailsComponent } from './components/staffs/staff-details/staff-details.component';
import { StaffEditComponent } from './components/staffs/staff-edit/staff-edit.component';
import { DischargeListComponent } from './components/discharges/discharge-list/discharge-list.component';
import { DischargeCreateComponent } from './components/discharges/discharge-create/discharge-create.component';
import { DischargeDetailsComponent } from './components/discharges/discharge-details/discharge-details.component';
import { DischargeEditComponent } from './components/discharges/discharge-edit/discharge-edit.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppointmentPrescriptionComponent } from './components/appointments/appointment-prescription/appointment-prescription.component';
import { EmergencyPrescriptionComponent } from './components/emergency/emergency-prescription/emergency-prescription.component';
import { BillingListComponent } from './components/billing/billing-list/billing-list.component';
import { BillingCreateComponent } from './components/billing/billing-create/billing-create.component';
import { BillingEditComponent } from './components/billing/billing-edit/billing-edit.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { TransactionCreateComponent } from './components/transactions/transaction-create/transaction-create.component';
import { TransactionEditComponent } from './components/transactions/transaction-edit/transaction-edit.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AuthGuard } from './Authentication/auth.guard';
import { DoctorListComponent } from './components/doctors/doctor-list/doctor-list.component';
import { DoctorCreateComponent } from './components/doctors/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './components/doctors/doctor-edit/doctor-edit.component';
import { NurseListComponent } from './components/nurse/nurse-list/nurse-list.component';
import { NurseEditComponent } from './components/nurse/nurse-edit/nurse-edit.component';
import { NurseCreateComponent } from './components/nurse/nurse-create/nurse-create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { UsersComponent } from './Authentication/users/users.component';
import { RolesComponent } from './Authentication/roles/roles.component';
import { AssignRoleComponent } from './Authentication/assign-role/assign-role.component';

const routes: Routes = [
  { path: "", redirectTo: "/HomePage", pathMatch: "full" },
  { path: "HomePage", component: HomepageComponent },


  { path: "PatientList", component: PatientListComponent },
  { path: "PatientCreate/create", component: PatientCreateComponent },
  { path: "PatientDetails/details/:id", component: PatientDetailsComponent },
  { path: "PatientEdit/edit/:id", component: PatientEditComponent },



  {
    path: "EmergencyList", component: EmergencyListComponent, canActivate: [AuthGuard] },
  {
    path: "EmergencyCreate/create", component: EmergencyCreateComponent, canActivate: [AuthGuard]},
  { path: "EmergencyEdit/edit/:id", component: EmergencyEditComponent },
  {
    path: "EmergencyPrescribe/entry/:id", component: EmergencyPrescriptionComponent, canActivate: [AuthGuard],
    /*data: { roles: ['Admin', 'Manager', 'Doctor'] }*/
  },



  {
    path: "AppointmentList", component: AppointmentListComponent, canActivate: [AuthGuard]},
  {
    path: "AppointmentCreate/create", component: AppointmentCreateComponent, canActivate: [AuthGuard]},
  { path: "AppointmentEdit/edit/:id", component: AppointmentEditComponent },
  {
    path: "AppointmentPrescribe/entry/:id", component: AppointmentPrescriptionComponent, canActivate: [AuthGuard],
    /*data: { roles: ['Admin', 'Manager', 'Doctor'] }*/
  },



  { path: "DepartmentList", component: DepartmentListComponent },
  { path: "DepartmentCreate/create", component: DepartmentCreateComponent },
  { path: "DepartmentDetails/details/:id", component: DepartmentDetailsComponent },
  { path: "DepartmentEdit/edit/:id", component: DepartmentEditComponent },

  { path: "WardList", component: WardListComponent },
  { path: "WardCreate/create", component: WardCreateComponent },
  { path: "WardDetails/details/:id", component: WardDetailsComponent },
  { path: "WardEdit/edit/:id", component: WardEditComponent },

  { path: "AdmissionList", component: AdmissionListComponent },
  { path: "AdmissionCreate/create", component: AdmissionCreateComponent },
  { path: "AdmissionEdit/edit/:id", component: AdmissionEditComponent },

  { path: "SupplierList", component: SupplierListComponent },
  { path: "SupplierCreate/create", component: SupplierCreateComponent },
  { path: "SupplierDetails/details/:id", component: SupplierDetailsComponent },
  { path: "SupplierEdit/edit/:id", component: SupplierEditComponent },

  { path: "StaffList", component: StaffListComponent },
  { path: "Staffcreate/create", component: StaffCreateComponent },
  { path: "StaffDetails/details/:id", component: StaffDetailsComponent },
  { path: "StaffEdit/edit/:id", component: StaffEditComponent },

  { path: "DischargeList", component: DischargeListComponent },
  { path: "Dischargecreate/create", component: DischargeCreateComponent },
  { path: "DischargeDetails/details/:id", component: DischargeDetailsComponent },
  { path: "DischargeEdit/edit/:id", component: DischargeEditComponent },


  { path: "BillingList", component: BillingListComponent },
  { path: "BillingCreate/create", component: BillingCreateComponent },
  { path: "BillingEdit/edit/:id", component: BillingEditComponent },


  { path: "TransactionList", component: TransactionListComponent },
  { path: "TransactionCreate/create", component: TransactionCreateComponent },
  { path: "TransactionEdit/edit/:id", component: TransactionEditComponent },


  { path: "DoctorList", component: DoctorListComponent },
  { path: "DoctorCreate/create", component: DoctorCreateComponent },
  { path: "DoctorEdit/edit/:id", component: DoctorEditComponent },

  { path: "NurseList", component: NurseListComponent },
  { path: "NurseCreate/create", component: NurseCreateComponent },
  { path: "NurseEdit/edit/:id", component: NurseEditComponent },

  { path: "Dashboard", component: DashboardComponent },






  { path: "login", component: LoginComponent, },
  { path: "register", component: RegisterComponent, },
  {
    path: "userlist", component: UsersComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin', 'Manager'] }
  },
  {
    path: "role-index", component: RolesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: "assignrole/:id", component: AssignRoleComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
