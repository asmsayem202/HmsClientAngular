import { Component, inject } from '@angular/core';
import { AuthService } from './Authentication/auth.service';
import { AuthResponse } from './Authentication/auth-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HmsClientAngular';
  private authService = inject(AuthService);
  user!: AuthResponse;
  public login!: boolean;


  ngOnInit() {

    this.login = this.authService.isLoggedIn;
    this.user = this.authService.getCurrentAuthUser;
  }

  logout() {
    this.authService.logout();
  }

  refreshToken() {
    this.authService.refreshToken()?.subscribe(() => { });
  }

}
