import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../models/discharge';
import { ActivatedRoute } from '@angular/router';
import { DischargeService } from '../../../services/discharge.service';

@Component({
  selector: 'app-discharge-details',
  templateUrl: './discharge-details.component.html',
  styleUrl: './discharge-details.component.css'
})
export class DischargeDetailsComponent implements OnInit {
  public discharge!: Discharge;

  constructor(
    private route: ActivatedRoute,
    private dischargeService: DischargeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const dischargeId = +params['id'];
      this.getDischargeDetails(dischargeId);
    });
  }

  getDischargeDetails(id: number): void {
    this.dischargeService.getDischarge(id).subscribe(
      (data: Discharge) => {
        this.discharge = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
