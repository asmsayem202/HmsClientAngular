import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionsService } from '../../../services/transactions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrl: './transaction-edit.component.css'
})
export class TransactionEditComponent {
  public model: Transaction = new Transaction();
  public transactionId!: number;

  constructor(private transactionsService: TransactionsService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.transactionId = +params['id'];
      this.getTransactionDetails(this.transactionId);
    });
  }
  getTransactionDetails(id: number): void {
    this.transactionsService.GetTransaction(id).subscribe(
      (data: Transaction) => {
        this.model = data;
      },
      error => {
        console.error(error);
      }
    );
  }
  onSubmit(): void {
    this.transactionsService.UpdateTransaction(this.model).subscribe(
      () => {
        this.router.navigate(['/TransactionList']);
      },
      error => {
        console.error(error);
      }
    );
  }

  CalculateAmounts() {
    this.model.balanceDue = this.model.amount - this.model.paidAmount;

  }
}
