import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginService]
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) {

  }
  ngOnInit() {
  }

  doLogin(location: string) {
    this.loginService.authenticate
    ((document.getElementById('userText') as HTMLInputElement).value,
    (document.getElementById('inputPassword') as HTMLInputElement).value,
    location);
  }

}
