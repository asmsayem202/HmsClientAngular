import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'https://localhost:7055/api/Staffs';

  constructor(private http: HttpClient) { }

  // Method to fetch all staff
  getAllStaffs(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl);
  }
  getStaff(staffId: number): Observable<Staff> {
    const url = `${this.apiUrl}/${staffId}`;
    return this.http.get<Staff>(url);
  }

  // Method to create new staff
  createStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.apiUrl, staff);
  }

  // Method to update existing staff
  updateStaff(staff: Staff): Observable<Staff> {
    const url = `${this.apiUrl}/${staff.staffId}`;
    return this.http.put<Staff>(url, staff);
  }

  // Method to delete staff
  deleteStaff(staffId: number): Observable<void> {
    const url = `${this.apiUrl}/${staffId}`;
    return this.http.delete<void>(url);
  }
}
