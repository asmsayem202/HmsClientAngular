import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "https://localhost:7055/api/Departments";

  public GetDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }
  public GetDepartment(id: number): Observable<Department> {
    return this.http.get<Department>(this.apiUrl + '/' + id);
  }
  public SaveDepartment(department: any): Observable<any> {
    return this.http.post(this.apiUrl, department);
  }
  public UpdateDepartment(department: Department): Observable<Department> {
    return this.http.put<Department>(this.apiUrl + '/' + department.departmentId, department);
  }
  public DeleteDepartment(id: any): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
