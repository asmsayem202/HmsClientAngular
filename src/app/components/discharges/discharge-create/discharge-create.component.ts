import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../models/discharge';
import { DischargeService } from '../../../services/discharge.service';
import { Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';
import { Admission } from '../../../models/admission';

@Component({
  selector: 'app-discharge-create',
  templateUrl: './discharge-create.component.html',
  styleUrl: './discharge-create.component.css'
})
export class DischargeCreateComponent implements OnInit {
  public model: Discharge = new Discharge();

  public admissions!: Admission[];

  constructor(private dischargeService: DischargeService, private router: Router, private CommonApi: CommonApiService) { }

  ngOnInit(): void {
    this.CommonApi.GetAdmission().subscribe((data) => {
      this.admissions = data;
    });
  }

  onSubmit(): void {
    this.dischargeService.createDischarge(this.model).subscribe({
      next: () => {
        this.router.navigate(['DischargeList']); // Navigate to the list of discharges after successful creation
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
