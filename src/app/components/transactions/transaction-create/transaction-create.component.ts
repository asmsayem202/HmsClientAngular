import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionsService } from '../../../services/transactions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrl: './transaction-create.component.css'
})
export class TransactionCreateComponent {
  public model!: Transaction;

  constructor(private transactionsService: TransactionsService, private router: Router) {

  }

  ngOnInit(): void {
    this.model = new Transaction();

  }


  onSubmit(): void {
    this.transactionsService.SaveTransaction(this.model).subscribe({
      next: () => {
        this.router.navigate(['/TransactionList']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  CalculateAmounts() {
    this.model.balanceDue = this.model.amount - this.model.paidAmount;

  }
}
