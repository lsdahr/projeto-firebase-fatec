import { Component, VERSION } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular with LUIS HORA';

  email: string;
  senha: string;

  constructor(public authService: AuthService) {}
    
    loginEmail() {
      this.authService.loginEmail(this.email, this.senha);
      this.email = this.senha = "";
    }

    loginGmail () {
      this.authService.loginGmail();
    }

    logout() {
      this.authService.logout();
    }
}
