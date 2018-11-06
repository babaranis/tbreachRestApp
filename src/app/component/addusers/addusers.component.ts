import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttptestService } from '../../services/httptest.service';



declare var swal: any;

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css'],
  providers: [HttptestService]
})


export class AddusersComponent implements OnInit {
  private firstName: String;
  private lastName: String;
  private userName: String;
  private dob: String;
  private city: String;
  private state: String;
  private zip: String;
  private gender: String;
  private jsonGet: string;
  value: any = {};


  constructor(private router: Router, private _http: HttptestService) {
  }

  ngOnInit() {
    this.gender = 'male';
  }

  doLogout() {
    this.router.navigate(['']);
  }

  createUser(fName: String, LName: String, username: String, dob: String, city: String, state: String, zip: String) {
     if (fName.length !== 0 && LName.length !== 0 && username.length !== 0 && dob.length !== 0) {
      swal({
        type: 'success',
        title: 'User Created Successfully',
        showConfirmButton: false,
         timer: 1200,
      });
      this.firstName = fName;
      this.lastName = LName;
      this.userName = username;
      this.dob = dob;
      this.city = city;
      this.state = state;
      this.zip = zip;
      console.log('User Information: ' + this.firstName, this.lastName, this.gender, this.dob, this.city, this.state, this.zip);
      // this.router.navigate(['header']);
     }

     /*
      this._http.getData().subscribe(
        data => this.value = data,
        resError => alert('ERROR: ' + resError),
        () => console.log('Finished'),
      );
      */

    //  this._http.postData().subscribe(
    //   data => alert(JSON.stringify(data)),
    //   resError => alert('ERROR: ' + resError),
    //   () => console.log('Post Finished')
    // );

  }

  setGender(g: String) {
    this.gender = g;
  }

  goTo(componentName: string) {
    this.router.navigate([componentName]);
  }






}
