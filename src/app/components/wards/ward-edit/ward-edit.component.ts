import { Component } from '@angular/core';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nurse } from '../../../models/nurse';
import { Room } from '../../../models/room';
import { CommonApiService } from '../../../services/common.api.service';

@Component({
  selector: 'app-ward-edit',
  templateUrl: './ward-edit.component.html',
  styleUrl: './ward-edit.component.css'
})
export class WardEditComponent {

  public model!: Ward;
  id!: number;
  public shiftTypes!: string[];


  constructor(private Service: WardService, private router: Router, private route: ActivatedRoute, private CommonApi: CommonApiService) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();
    this.CommonApi.GetShiftTypes().subscribe((data) => {
      this.shiftTypes = data;
    });

  }


  OnSubmit() {


    this.Service.UpdateWard(this.model).subscribe({
      next: () => {
        this.router.navigate(['WardList']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetWard(this.id).subscribe((data: Ward) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
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
