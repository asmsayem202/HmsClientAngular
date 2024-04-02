import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models/staff';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../../../services/staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css'
})
export class StaffDetailsComponent implements OnInit {
  staffId!: number;
  staff: Staff | null = null;

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.staffId = +params['id'];
      this.getStaffDetails();
    });
  }

  getStaffDetails(): void {
    this.staffService.getStaff(this.staffId).subscribe(
      (data: Staff) => {
        this.staff = data;
        console.log(this.staff);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
