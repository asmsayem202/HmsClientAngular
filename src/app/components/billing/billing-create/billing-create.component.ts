import { Component } from '@angular/core';
import { Billing } from '../../../models/billing';
import { Patient } from '../../../models/patient';
import { BillingService } from '../../../services/billing.service';
import { CommonApiService } from '../../../services/common.api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-create',
  templateUrl: './billing-create.component.html',
  styleUrl: './billing-create.component.css'
})
export class BillingCreateComponent {
  public model!: Billing;
  public patients!: Patient[];

  constructor(private service: BillingService, private CommonApi: CommonApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.model = new Billing();

    this.CommonApi.GetPatient().subscribe((data) => {
      this.patients = data;
    });
  }

  OnSubmit() {
    //console.log(this.model);
    //alert(JSON.stringify(this.model));
    this.service.SaveBilling(this.model).subscribe({
      next: () => {
        this.router.navigate(["BillingList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  CalculateAmounts() {
    this.model.amount = this.model.ot_Fee + this.model.medicineFee + this.model.consultancyFee + this.model.bedCharge + this.model.serviceCharge + this.model.othersFee;

    this.model.netAmount = this.model.amount - (this.model.amount * this.model.discount / 100);

    this.model.balanceDue = this.model.netAmount - this.model.paidAmount;


  }
}
