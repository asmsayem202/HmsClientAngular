import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://localhost:7055/api/Patients';

  public GetPatients(): Observable<Patient[]> {

    return this.http.get<Patient[]>(this.apiUrl);
  }
  public GetPatient(id: number): Observable<Patient> {

    return this.http.get<Patient>(this.apiUrl + '/' + id);
  }
  public SavePatient(patients: any): Observable<any> {

    return this.http.post(this.apiUrl, patients);
  }
  public UpdatePatient(patients: Patient): Observable<Patient> {

    return this.http.put<Patient>(this.apiUrl + '/' + patients.patientId, patients);
  }
  public DeletePatient(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}
