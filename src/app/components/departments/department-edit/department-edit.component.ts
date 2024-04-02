import { Component } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentsService } from '../../../services/departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../../models/doctor';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrl: './department-edit.component.css'
})
export class DepartmentEditComponent {

  public model!: Department;
  id!: number;
  public shiftTypes!: string[];

  constructor(private Service: DepartmentsService, private router: Router, private route: ActivatedRoute, private CommonApi: CommonApiService) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();
    this.CommonApi.GetShiftTypes().subscribe((data) => {
      this.shiftTypes = data;
    });

  }


  OnSubmit() {

 /*   alert(JSON.stringify(this.model));*/

    this.Service.UpdateDepartment(this.model).subscribe({
      next: () => {
        this.router.navigate(["DepartmentList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetDepartment(this.id).subscribe((data: Department) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  AddDoctor() {

    this.model.doctors.push(new Doctor());
  }

  DeleteDoctor(index: number) {

    const remItem = this.model.doctors.splice(index, 1);
  }


}
