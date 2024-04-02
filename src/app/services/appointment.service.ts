import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://localhost:7055/api/Appointments';

  public GetAppointments(): Observable<Appointment[]> {

    return this.http.get<Appointment[]>(this.apiUrl);
  }
  public GetAppointment(id: number): Observable<Appointment> {

    return this.http.get<Appointment>(this.apiUrl + '/' + id);
  }
  public SaveAppointment(appointments: any): Observable<any> {

    return this.http.post(this.apiUrl, appointments);
  }

  public GetPrescription(id: number): Observable<Appointment> {

    return this.http.get<Appointment>(this.apiUrl + '/GetPrescription/' + id);
  }

  public SetPrescription(appointment: any): Observable<any> {

    return this.http.post(this.apiUrl +"/SetPrescription", appointment);
  }
  public UpdateAppointment(appointments: Appointment): Observable<Appointment> {

    return this.http.put<Appointment>(this.apiUrl + '/' + appointments.appointmentId, appointments);
  }
  public DeleteAppointment(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }

}
