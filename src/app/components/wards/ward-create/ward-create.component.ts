import { Component } from '@angular/core';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';
import { Room } from '../../../models/room';
import { Nurse } from '../../../models/nurse';
import { Router } from '@angular/router';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-ward-create',
  templateUrl: './ward-create.component.html',
  styleUrl: './ward-create.component.css'
})
export class WardCreateComponent {
  public model!: Ward;
  public shiftTypes!: string[];


  constructor(private Services: WardService, private router: Router, private CommonApi: CommonApiService) {

  }
  ngOnInit(): void {


    this.model = new Ward();
    this.CommonApi.GetShiftTypes().subscribe((data) => {
      this.shiftTypes = data;
    });

  }


  OnSubmit() {

    this.Services.SaveWard(this.model).subscribe({
      next: () => {
        this.router.navigate(["WardList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  AddNurse() {

    this.model.nurses.push(new Nurse());

  }

  DeleteNurse(index: number) {

    const remItem = this.model.nurses.splice(index, 1);
  }
  Addroom() {

    this.model.rooms.push(new Room());

  }

  Deleteroom(index: number) {

    const remItem = this.model.rooms.splice(index, 1);
  }
}
