import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/throw';
import {Headers} from '@angular/http';

@Injectable()
export class HttptestService {
  constructor(private _http: Http) {

  }
  getData(_url: string) {
        return this._http.get(_url)
           .map((response: Response) => response.json())
           .catch(this._errorHandler);
  }

  _errorHandler(error: Response) {
      console.error(error);
      return Observable.throw(error || 'Server Error');

  }
  /*
  postData() {
    const json = JSON.stringify({
      var1 : 'test',
      var2: 2
    });
    const params = 'json=' + json;
    const headers      = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options       = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.post(_url, params, options).map(
      res => res.json()
    );

  }*/

}
