import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'https://localhost:7055/api/Doctors';

  constructor(private http: HttpClient) { }

  // Method to fetch all Doctor
  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }
  getDoctor(doctorId: number): Observable<Doctor> {
    const url = `${this.apiUrl}/${doctorId}`;
    return this.http.get<Doctor>(url);
  }

  // Method to create new Doctor
  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }

  // Method to update existing Doctor
  updateDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.apiUrl}/${doctor.doctorId}`;
    return this.http.put<Doctor>(url, doctor);
  }

  // Method to delete Doctor
  deleteDoctor(doctorId: number): Observable<void> {
    const url = `${this.apiUrl}/${doctorId}`;
    return this.http.delete<void>(url);
  }
}
