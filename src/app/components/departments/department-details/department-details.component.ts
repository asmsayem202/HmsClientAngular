import { Component } from '@angular/core';
import { DepartmentsService } from '../../../services/departments.service';
import { Department } from '../../../models/department';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  public model!: Department;
  id!: number;

  constructor(private Service: DepartmentsService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }
  LoadData() {
    this.Service.GetDepartment(this.id).subscribe((data: Department) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
}
