import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patients/patient-list/patient-list.component';
import { PatientCreateComponent } from './components/patients/patient-create/patient-create.component';
import { PatientEditComponent } from './components/patients/patient-edit/patient-edit.component';
import { PatientDetailsComponent } from './components/patients/patient-details/patient-details.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmergencyListComponent } from './components/emergency/emergency-list/emergency-list.component';
import { EmergencyCreateComponent } from './components/emergency/emergency-create/emergency-create.component';
import { EmergencyEditComponent } from './components/emergency/emergency-edit/emergency-edit.component';
import { AppointmentListComponent } from './components/appointments/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './components/appointments/appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './components/appointments/appointment-edit/appointment-edit.component';
import { DepartmentListComponent } from './components/departments/department-list/department-list.component';
import { DepartmentCreateComponent } from './components/departments/department-create/department-create.component';
import { DepartmentEditComponent } from './components/departments/department-edit/department-edit.component';
import { DepartmentDetailsComponent } from './components/departments/department-details/department-details.component';
import { WardListComponent } from './components/wards/ward-list/ward-list.component';
import { WardCreateComponent } from './components/wards/ward-create/ward-create.component';
import { WardEditComponent } from './components/wards/ward-edit/ward-edit.component';
import { WardDetailsComponent } from './components/wards/ward-details/ward-details.component';
import { AdmissionListComponent } from './components/admissions/admission-list/admission-list.component';
import { AdmissionCreateComponent } from './components/admissions/admission-create/admission-create.component';
import { AdmissionEditComponent } from './components/admissions/admission-edit/admission-edit.component';
import { SupplierListComponent } from './components/suppilers/supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './components/suppilers/supplier-create/supplier-create.component';
import { SupplierDetailsComponent } from './components/suppilers/supplier-details/supplier-details.component';
import { SupplierEditComponent } from './components/suppilers/supplier-edit/supplier-edit.component';
import { StaffCreateComponent } from './components/staffs/staff-create/staff-create.component';
import { StaffDetailsComponent } from './components/staffs/staff-details/staff-details.component';
import { StaffEditComponent } from './components/staffs/staff-edit/staff-edit.component';
import { StaffListComponent } from './components/staffs/staff-list/staff-list.component';
import { DischargeCreateComponent } from './components/discharges/discharge-create/discharge-create.component';
import { DischargeDetailsComponent } from './components/discharges/discharge-details/discharge-details.component';
import { DischargeEditComponent } from './components/discharges/discharge-edit/discharge-edit.component';
import { DischargeListComponent } from './components/discharges/discharge-list/discharge-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppointmentPrescriptionComponent } from './components/appointments/appointment-prescription/appointment-prescription.component';
import { EmergencyPrescriptionComponent } from './components/emergency/emergency-prescription/emergency-prescription.component';
import { BillingCreateComponent } from './components/billing/billing-create/billing-create.component';
import { BillingEditComponent } from './components/billing/billing-edit/billing-edit.component';
import { BillingListComponent } from './components/billing/billing-list/billing-list.component';
import { AggregateService, ColumnChooserService, DetailRowService, ExcelExportService, FilterService, GridModule, GroupService, PageService, PagerModule, PdfExportService, ReorderService, ResizeService, SearchService, SelectionService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TransactionCreateComponent } from './components/transactions/transaction-create/transaction-create.component';
import { TransactionEditComponent } from './components/transactions/transaction-edit/transaction-edit.component';
import { TransactionListComponent } from './components/transactions/transaction-list/transaction-list.component';
import { authInterceptor } from './Authentication/auth.interceptor';
import { DoctorCreateComponent } from './components/doctors/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './components/doctors/doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './components/doctors/doctor-list/doctor-list.component';
import { NurseCreateComponent } from './components/nurse/nurse-create/nurse-create.component';
import { NurseListComponent } from './components/nurse/nurse-list/nurse-list.component';
import { NurseEditComponent } from './components/nurse/nurse-edit/nurse-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/Layout/header/header.component';
import { SidebarComponent } from './components/Layout/sidebar/sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterComponent } from './Authentication/register/register.component';
import { AuthService } from './Authentication/auth.service';
import { UsersComponent } from './Authentication/users/users.component';
import { RolesComponent } from './Authentication/roles/roles.component';
import { AssignRoleComponent } from './Authentication/assign-role/assign-role.component';
/*import { LoginComponent } from './Authentication/login/login.component';*/


@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientCreateComponent,
    PatientEditComponent,
    PatientDetailsComponent,
    EmergencyListComponent,
    EmergencyCreateComponent,
    EmergencyEditComponent,
    AppointmentListComponent,
    AppointmentCreateComponent,
    AppointmentEditComponent,
    DepartmentListComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent,
    WardListComponent,
    WardCreateComponent,
    WardEditComponent,
    WardDetailsComponent,
    AdmissionListComponent,
    AdmissionCreateComponent,
    AdmissionEditComponent,
    SupplierListComponent,
    SupplierCreateComponent,
    SupplierDetailsComponent,
    SupplierEditComponent,
    StaffCreateComponent,
    StaffDetailsComponent,
    StaffEditComponent,
    StaffListComponent,
    DischargeCreateComponent,
    DischargeDetailsComponent,
    DischargeEditComponent,
    DischargeListComponent,
    HomepageComponent,
    AppointmentPrescriptionComponent,
    EmergencyPrescriptionComponent,
    BillingCreateComponent,
    BillingEditComponent,
    BillingListComponent,
    TransactionCreateComponent,
    TransactionEditComponent,
    TransactionListComponent,
    DoctorCreateComponent,
    DoctorEditComponent,
    DoctorListComponent,
    NurseCreateComponent,
    NurseListComponent,
    NurseEditComponent,
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    RegisterComponent,
    UsersComponent,
    RolesComponent,
    AssignRoleComponent
    
   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    PagerModule,



    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    PageService, SortService, FilterService, GroupService, AggregateService,
    ColumnChooserService,  ResizeService, ReorderService, SearchService,
    SelectionService, ExcelExportService, PdfExportService, DetailRowService, ToolbarService,
    SelectionService, PdfExportService, provideHttpClient(withInterceptors([authInterceptor])), provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
