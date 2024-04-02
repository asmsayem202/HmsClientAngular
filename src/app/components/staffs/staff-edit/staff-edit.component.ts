import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models/staff';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';
import { StaffService } from '../../../services/staff.service';
import { ImageUpload } from '../../../models/image-upload';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrl: './staff-edit.component.css'
})
export class StaffEditComponent implements OnInit {
  public model: Staff = new Staff();
  public staffId!: number;
  public shiftTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonApiService,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.staffId = +params['id'];
      this.getStaffDetails(this.staffId);
    });
    this.commonService.GetShiftTypes().subscribe((data: string[]) => {
      this.shiftTypes = data;
    });
  }

  getStaffDetails(id: number): void {
    this.staffService.getStaff(id).subscribe(
      (data: Staff) => {
        this.model = data;
        this.model.imageUpload = new ImageUpload();
        if (data.imagePath) {
          this.model.imageUpload.imageData = data.imagePath;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit(): void {
    this.staffService.updateStaff(this.model).subscribe(
      () => {
        this.router.navigate(['/StaffList']);
      },
      error => {
        console.error(error);
      }
    );
  }
  LoadData() {
    this.staffService.getStaff(this.staffId).subscribe((data: Staff) => {
      this.model = data;
      this.model.imageUpload = new ImageUpload();
      if (data.imagePath) {
        
        this.model.imageUpload.imageData = data.imagePath;
      }

    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  uploadImage(imageInput: any) {



    var file: File = imageInput.files[0];

    this.model.imageUpload.getBase64(file);


  }
}
