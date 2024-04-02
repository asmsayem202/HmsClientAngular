import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ward } from '../models/ward';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WardService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://localhost:7055/api/wards';

  public GetWards(): Observable<Ward[]> {

    return this.http.get<Ward[]>(this.apiUrl);
  }
  public GetWard(id: number): Observable<Ward> {

    return this.http.get<Ward>(this.apiUrl + '/' + id);
  }
  public SaveWard(ward: any): Observable<any> {

    return this.http.post(this.apiUrl, ward);
  }
  public UpdateWard(ward: Ward): Observable<Ward> {

    return this.http.put<Ward>(this.apiUrl + '/' + ward.wardId, ward);
  }
  public DeleteWard(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}
