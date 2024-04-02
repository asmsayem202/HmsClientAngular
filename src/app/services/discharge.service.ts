import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discharge } from '../models/discharge';

@Injectable({
  providedIn: 'root'
})
export class DischargeService {
  private apiUrl = 'https://localhost:7055/api/Discharges';

  constructor(private http: HttpClient) { }

  // Method to fetch all discharges
  getAllDischarges(): Observable<Discharge[]> {
    return this.http.get<Discharge[]>(this.apiUrl);
  }

  // Method to fetch a single discharge by ID
  getDischarge(dischargeId: number): Observable<Discharge> {
    const url = `${this.apiUrl}/${dischargeId}`;
    return this.http.get<Discharge>(url);
  }

  // Method to create new discharge
  createDischarge(discharge: Discharge): Observable<Discharge> {
    return this.http.post<Discharge>(this.apiUrl, discharge);
  }

  // Method to update existing discharge
  updateDischarge(discharge: Discharge): Observable<Discharge> {
    const url = `${this.apiUrl}/${discharge.dischargeId}`;
    return this.http.put<Discharge>(url, discharge);
  }


  // Method to delete discharge
  deleteDischarge(dischargeId: number): Observable<void> {
    const url = `${this.apiUrl}/${dischargeId}`;
    return this.http.delete<void>(url);
  }
}
