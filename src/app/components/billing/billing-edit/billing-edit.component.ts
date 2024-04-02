import { Component } from '@angular/core';
import { Billing } from '../../../models/billing';
import { Patient } from '../../../models/patient';
import { BillingService } from '../../../services/billing.service';
import { CommonApiService } from '../../../services/common.api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-billing-edit',
  templateUrl: './billing-edit.component.html',
  styleUrl: './billing-edit.component.css'
})
export class BillingEditComponent {
  public model!: Billing;
  public patients!: Patient[];
  id!: number;


  constructor(private Service: BillingService, private CommonApi: CommonApiService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();
    this.CommonApi.GetPatient().subscribe((data) => {
      this.patients = data;
    });
  }

  OnSubmit() {


    this.Service.UpdateBilling(this.model).subscribe({
      next: () => {
        this.router.navigate(["BillingList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  LoadData() {
    this.Service.GetBilling(this.id).subscribe((data: Billing) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  CalculateAmounts() {
    this.model.amount = this.model.ot_Fee + this.model.medicineFee + this.model.consultancyFee + this.model.bedCharge + this.model.serviceCharge + this.model.othersFee;

    this.model.netAmount = this.model.amount - (this.model.amount * this.model.discount / 100);

    this.model.balanceDue = this.model.netAmount - this.model.paidAmount;


  }
}
