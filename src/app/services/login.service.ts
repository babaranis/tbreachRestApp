import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

declare var swal: any;

@Injectable()
export class LoginService {
    constructor(private router: Router) {
    }

    delayMs = 100;
   authenticate(user: String, password: string, location: string) {
      if (user.length > 0 && password.length > 0 && location.length > 0) {
        if ( user === 'admin' && password === 'Admin123') {
          swal({
            type: 'success',
            title: 'Login Successful',
            showConfirmButton: false,
            timer: 1200
          });
          this.router.navigate(['header']);
        } else {
          swal({
            type: 'error',
            title: 'Authentication Failed...',
            text: 'Invalid Username or Password!'
          });
          this.router.navigate(['']);
        }

      }

    }

  }
