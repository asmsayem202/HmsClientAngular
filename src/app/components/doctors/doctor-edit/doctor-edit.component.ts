import { Component } from '@angular/core';
import { Doctor } from '../../../models/doctor';
import { DoctorService } from '../../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';
import { Department } from '../../../models/department';
import { DepartmentsService } from '../../../services/departments.service';
import { ImageUpload } from '../../../models/image-upload';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrl: './doctor-edit.component.css'
})
export class DoctorEditComponent {

  public model!: Doctor;
  id!: number;
  public departments: Department[] = [];
  public shiftTypes!: string[];

  constructor(private doctorService: DoctorService,
    private deptService: DepartmentsService,
 
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
    this.deptService.GetDepartments().subscribe((data) => {
      this.departments = data;
    });

  }


  OnSubmit() {

    /*   alert(JSON.stringify(this.model));*/

    this.doctorService.updateDoctor(this.model).subscribe({
      next: () => {
        this.router.navigate(["DoctorList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.doctorService.getDoctor(this.id).subscribe((data: Doctor) => {
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
