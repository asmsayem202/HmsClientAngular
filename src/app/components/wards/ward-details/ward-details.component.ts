import { Component } from '@angular/core';
import { Ward } from '../../../models/ward';
import { WardService } from '../../../services/ward.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ward-details',
  templateUrl: './ward-details.component.html',
  styleUrl: './ward-details.component.css'
})
export class WardDetailsComponent {
  public model!: Ward;
  id!: number;

  constructor(private Service: WardService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }

  LoadData() {
    this.Service.GetWard(this.id).subscribe((data: Ward) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
}
