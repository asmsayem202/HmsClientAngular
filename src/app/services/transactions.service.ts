import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://localhost:7055/api/Transactions';

  public GetAllTransactions(): Observable<Transaction[]> {

    return this.http.get<Transaction[]>(this.apiUrl);
  }
  public GetTransaction(id: number): Observable<Transaction> {

    return this.http.get<Transaction>(this.apiUrl + '/' + id);
  }
  public SaveTransaction(transaction: any): Observable<any> {

    return this.http.post(this.apiUrl, transaction);
  }
  public UpdateTransaction(transaction: Transaction): Observable<Transaction> {

    return this.http.put<Transaction>(this.apiUrl + '/' + transaction.transactionId, transaction);
  }
  public DeleteTransaction(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}
