import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nurse } from '../models/nurse';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private apiUrl = 'https://localhost:7055/api/Nurses';

  constructor(private http: HttpClient) { }

  // Method to fetch all Nurse
  getAllNurses(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(this.apiUrl);
  }
  getNurse(nurseId: number): Observable<Nurse> {
    const url = `${this.apiUrl}/${nurseId}`;
    return this.http.get<Nurse>(url);
  }

  // Method to create new Nurse
  createNurse(nurse: Nurse): Observable<Nurse> {
    return this.http.post<Nurse>(this.apiUrl, nurse);
  }

  // Method to update existing Nurse
  updateNurse(nurse: Nurse): Observable<Nurse> {
    const url = `${this.apiUrl}/${nurse.nurseId}`;
    return this.http.put<Nurse>(url, nurse);
  }

  // Method to delete Nurse
  deleteNurse(nurseId: number): Observable<void> {
    const url = `${this.apiUrl}/${nurseId}`;
    return this.http.delete<void>(url);
  }
}
