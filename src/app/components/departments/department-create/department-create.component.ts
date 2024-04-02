import { Component } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentsService } from '../../../services/departments.service';
import { Router } from '@angular/router';
import { Doctor } from '../../../models/doctor';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrl: './department-create.component.css'
})
export class DepartmentCreateComponent {
  public model!: Department;
  public shiftTypes!: string[];

  constructor(private Service: DepartmentsService, private router: Router, private CommonApi: CommonApiService) {

  }
  ngOnInit(): void {


    this.model = new Department();
    this.CommonApi.GetShiftTypes().subscribe((data) => {
      this.shiftTypes = data;
    });
  }


  OnSubmit() {

    this.Service.SaveDepartment(this.model).subscribe({
      next: () => {
        this.router.navigate(["DepartmentList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  AddDoctor() {

    this.model.doctors.push(new Doctor());

  }

  DeleteDoctor(index: number) {

    const remItem = this.model.doctors.splice(index, 1);
  }
}
