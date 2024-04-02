import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http: HttpClient) { }
  apiUrl: string = "https://localhost:7055/api/Suppliers";

  public GetSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl);
  }
  public GetSupplier(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(this.apiUrl + '/' + id);
  }
  public SaveSupplier(supplier: any): Observable<any> {
    return this.http.post(this.apiUrl, supplier);
  }
  public UpdateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(this.apiUrl + '/' + supplier.supplierId, supplier);
  }
  public DeleteSupplier(id: any): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
