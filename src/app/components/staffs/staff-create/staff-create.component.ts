import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models/staff';
import { StaffService } from '../../../services/staff.service';
import { CommonApiService } from '../../../services/common.api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrl: './staff-create.component.css'
})
export class StaffCreateComponent implements OnInit {
  public model: Staff = new Staff();
  public shiftTypes: string[] = [];

  constructor(
    private staffService: StaffService,
    private commonService: CommonApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.model = new Staff();
    this.commonService.GetShiftTypes().subscribe((data: string[]) => {
      this.shiftTypes = data;
    });
  }

  onSubmit(): void {
    this.staffService.createStaff(this.model).subscribe({
      next: () => {
        this.router.navigate(['/StaffList']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  uploadImage(imageInput: any) {
    var file: File = imageInput.files[0];
    if (file.size > 200 * 1024) {
      alert('max allowed size is 200KB');
      return;
    }
    this.model.imageUpload.getBase64(file);

  }
}
