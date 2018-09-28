import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.user.login = 'anderson';
    this.user.password = '121181';
  }

  Login() {
    this._authService.Login(this.user);
  }

  // Trabalhando com login,
  // pensar na possibilidade de ocultar menu antes do login.
}
