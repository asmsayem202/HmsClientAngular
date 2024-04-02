import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../models/discharge';
import { ActivatedRoute, Router } from '@angular/router';
import { DischargeService } from '../../../services/discharge.service';
import { Admission } from '../../../models/admission';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-discharge-edit',
  templateUrl: './discharge-edit.component.html',
  styleUrl: './discharge-edit.component.css'
})
export class DischargeEditComponent implements OnInit {
  public model: Discharge = new Discharge();
  public dischargeId!: number;
  public admissions!: Admission[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dischargeService: DischargeService,
    private CommonApi: CommonApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dischargeId = +params['id'];
      this.getDischargeDetails(this.dischargeId);

      this.CommonApi.GetAdmission().subscribe((data) => {
        this.admissions = data;
      });
    });
  }

  getDischargeDetails(id: number): void {
    this.dischargeService.getDischarge(id).subscribe(
      (data: Discharge) => {
        this.model = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    this.dischargeService.updateDischarge(this.model).subscribe(
      () => {
        this.router.navigate(['/DischargeList']);
      },
      error => {
        console.error(error);
      }
    );
  }

}
