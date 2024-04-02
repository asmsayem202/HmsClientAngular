import { Component } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import { Transaction } from '../../../models/transaction';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  public transactions: Transaction[] = [];

  public pageSettings: PageSettingsModel = { pageSize: 5 };
  public filterSettings: FilterSettingsModel = { type: 'FilterBar' };

  public toolbarOptions?: ToolbarItems[] = ['Search',
    //'Print',
    'ColumnChooser',
    //'Add', 'Edit', 'Delete', 'Update', 'Cancel',
    //'PdfExport',
    //'ExcelExport',
    //'CsvExport'
  ];
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.transactionsService.GetAllTransactions().subscribe((response: Transaction[]) => {
      this.transactions = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }


  DeleteTransaction(transaction: Transaction) {
    let confirmDelete: boolean = confirm(`Delete ${transaction.transactionId}?`);
    if (confirmDelete) {
      this.transactionsService.DeleteTransaction(transaction.transactionId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
