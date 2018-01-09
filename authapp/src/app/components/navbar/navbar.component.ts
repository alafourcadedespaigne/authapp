import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}
