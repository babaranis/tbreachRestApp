import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttptestService } from '../../services/httptest.service';


@Component({
  selector: 'app-view-privileges',
  templateUrl: './view-privileges.component.html',
  styleUrls: ['./view-privileges.component.css'],
  providers: [HttptestService]
})
export class ViewPrivilegesComponent implements OnInit {
  private apiUrl = 'http://localhost:8080/tbreach-api-rest/rest/v1/privileges';
  data: any = {};
  constructor(private router: Router, private _http: HttptestService) {
    this.loadPrivileges();
  }


  ngOnInit() {
  }

  goTo(componentName: string) {
    this.router.navigate([componentName]);
  }

  loadPrivileges() {
    return this._http.getData(this.apiUrl).subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  doLogout() {
    this.router.navigate(['']);
  }

}

