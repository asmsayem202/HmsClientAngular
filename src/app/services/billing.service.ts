import { Injectable } from '@angular/core';
import { Billing } from '../models/billing';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://localhost:7055/api/Billings';

  public GetBillings(): Observable<Billing[]> {

    return this.http.get<Billing[]>(this.apiUrl);
  }
  public GetBilling(id: number): Observable<Billing> {

    return this.http.get<Billing>(this.apiUrl + '/' + id);
  }
  public SaveBilling(billing: any): Observable<any> {

    return this.http.post(this.apiUrl, billing);
  }
  public UpdateBilling(billing: Billing): Observable<Billing> {

    return this.http.put<Billing>(this.apiUrl + '/' + billing.billingId, billing);
  }
  public DeleteBilling(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}
