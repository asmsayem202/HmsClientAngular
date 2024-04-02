import { Component, OnInit } from '@angular/core';
import { Nurse } from '../../../models/nurse';
import { Ward } from '../../../models/ward';
import { NurseService } from '../../../services/nurse.service';
import { WardService } from '../../../services/ward.service';
import { CommonApiService } from '../../../services/common.api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-create',
  templateUrl: './nurse-create.component.html',
  styleUrl: './nurse-create.component.css'
})
export class NurseCreateComponent implements OnInit {
  public model: Nurse = new Nurse();
  public shiftTypes: string[] = [];
  public wards: Ward[] = [];

  constructor(
    private nurseService: NurseService,
    private wardService: WardService,
    private commonService: CommonApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.model = new Nurse();
    this.commonService.GetShiftTypes().subscribe((data: string[]) => {
      this.shiftTypes = data;
    });
    this.wardService.GetWards().subscribe((data) => {
      this.wards = data;
    });
  }

  OnSubmit(): void {
    this.nurseService.createNurse(this.model).subscribe({
      next: () => {
        this.router.navigate(['/NurseList']);
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
