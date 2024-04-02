import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BloodType } from '../models/blood-type';
import { AppointmentType } from '../models/appointment-type';
import { Patient } from '../models/patient';
import { Department } from '../models/department';
import { Doctor } from '../models/doctor';
import { Appointment } from '../models/appointment';
import { Emergency } from '../models/emergency';
import { Ward } from '../models/ward';
import { Admission } from '../models/admission';
import { Nurse } from '../models/nurse';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "https://localhost:7055/api/Common";


  public GetShiftTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl +"/GetShiftType");
  }

  public GetGenders(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl +"/GetGender");
  }

  public GetBloodTypes(): Observable<BloodType[]> {
    return this.http.get<BloodType[]>(this.apiUrl + "/GetBloodType");
  }

  public GetAppointmentType(): Observable<AppointmentType[]> {
    return this.http.get<AppointmentType[]>(this.apiUrl + "/GetAppointmentType");
  }

  public GetPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl + "/GetPatient");
  }

  public GetDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + "/GetDepartment");
  }

  public GetDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl + "/GetDoctor");
  }

  public GetAdmission(): Observable<Admission[]> {
    return this.http.get<Admission[]>(this.apiUrl + "/GetAdmission");
  }

  public GetAppointment(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl + "/GetAppointment");
  }

  public GetEmergency(): Observable<Emergency[]> {
    return this.http.get<Emergency[]>(this.apiUrl + "/GetEmergency");
  }

  public GetWard(): Observable<Ward[]> {
    return this.http.get<Ward[]>(this.apiUrl + "/GetWard");
  }

  public GetNurse(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(this.apiUrl + "/GetNurse");
  }

  public GetRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl + "/GetRoom");
  }

  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true);
  sidebarVisibility$ = this.sidebarVisibilitySubject.asObservable();

  toggleSidebar() {
    this.sidebarVisibilitySubject.next(!this.sidebarVisibilitySubject.value);
  }


}
