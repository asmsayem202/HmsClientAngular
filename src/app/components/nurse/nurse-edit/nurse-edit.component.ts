import { Component } from '@angular/core';
import { Nurse } from '../../../models/nurse';
import { Ward } from '../../../models/ward';
import { NurseService } from '../../../services/nurse.service';
import { WardService } from '../../../services/ward.service';
import { CommonApiService } from '../../../services/common.api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageUpload } from '../../../models/image-upload';

@Component({
  selector: 'app-nurse-edit',
  templateUrl: './nurse-edit.component.html',
  styleUrl: './nurse-edit.component.css'
})
export class NurseEditComponent {

  public model!: Nurse;
  id!: number;
  public wards: Ward[] = [];
  public shiftTypes!: string[];

  constructor(private nurseService: NurseService,
    private wardService: WardService,

    private CommonApi: CommonApiService,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();
    this.CommonApi.GetShiftTypes().subscribe((data) => {
      this.shiftTypes = data;
    });
    this.wardService.GetWards().subscribe((data) => {
      this.wards = data;
    });

  }


  OnSubmit() {

    /*   alert(JSON.stringify(this.model));*/

    this.nurseService.updateNurse(this.model).subscribe({
      next: () => {
        this.router.navigate(["NurseList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.nurseService.getNurse(this.id).subscribe((data: Nurse) => {

      this.model = data;
      console.log(data);
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
