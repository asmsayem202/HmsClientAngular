import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admission } from '../models/admission';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {


  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://localhost:7055/api/Admissions';

  public GetAdmissions(): Observable<Admission[]> {

    return this.http.get<Admission[]>(this.apiUrl);
  }
  public GetAdmission(id: number): Observable<Admission> {

    return this.http.get<Admission>(this.apiUrl + '/' + id);
  }
  public SaveAdmission(admissions: any): Observable<any> {

    return this.http.post(this.apiUrl, admissions);
  }
  public UpdateAdmission(admissions: Admission): Observable<Admission> {

    return this.http.put<Admission>(this.apiUrl + '/' + admissions.admissionId, admissions);
  }
  public DeleteAdmission(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}
