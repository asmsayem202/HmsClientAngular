import { Component, ViewChild, inject } from '@angular/core';
import { AuthRegister } from '../auth-register';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { AuthRegRequest } from '../AuthRegRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  @ViewChild('form') form!: NgForm;

  model!: AuthRegRequest;
  authService = inject(AuthService);
  router = inject(Router);
  constructor() {
    this.model = new AuthRegRequest();
  }

  register(event: Event) {

    if (this.form.invalid) {
      this.form.form.markAllAsTouched();
      return;
    }

    event.preventDefault();

    console.log(`Login: ${this.model.email} / ${this.model.password}`);

    this.authService
      .register(this.model)
      .subscribe(() => {
        alert('Registration success!');
        this.router.navigate(['/login']);
      }
      ,
        error => {
          console.log(error);
          alert(error);
        }

    );
  }
}
