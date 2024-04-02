import { Component } from '@angular/core';
import { Emergency } from '../../../models/emergency';
import { EmergencyService } from '../../../services/emergency.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmergencyPrescribe, EmergencyPrescribeDetails } from '../../../models/emergency-prescribe';

@Component({
  selector: 'app-emergency-prescription',
  templateUrl: './emergency-prescription.component.html',
  styleUrl: './emergency-prescription.component.css'
})
export class EmergencyPrescriptionComponent {
  public model!: Emergency;
  emergencyid!: number;

  constructor(private Service: EmergencyService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {

    this.emergencyid = this.route.snapshot.params['id'];
    this.LoadData();
  }

  LoadData() {
    this.Service.GetPrescription(this.emergencyid).subscribe((data: Emergency) => {

      this.model = data;
      if (this.model.emergencyPrescribe == undefined || this.model.emergencyPrescribe == null) {
        this.model.emergencyPrescribe = new EmergencyPrescribe();
      }
      console.log(data);

    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  OnSubmit() {

    this.Service.SetPrescription(this.model).subscribe({
      next: () => {
        this.router.navigate(["EmergencyList"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  AddItems() {
    if (this.model.emergencyPrescribe.emergencyPrescribeDetails == undefined || this.model.emergencyPrescribe.emergencyPrescribeDetails == null) {
      this.model.emergencyPrescribe.emergencyPrescribeDetails = [];
    }
    this.model.emergencyPrescribe.emergencyPrescribeDetails.push(new EmergencyPrescribeDetails());

  }

  DeleteItems(index: number) {

    const remItem = this.model.emergencyPrescribe.emergencyPrescribeDetails.splice(index, 1);
  }
}
