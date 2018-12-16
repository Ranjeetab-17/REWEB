import { Injectable } from '@angular/core';
import { User } from './model/user'
import { Task } from './model/Task'
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class PMSServiceService {

  constructor(private _http: Http) { }

  SaveUSer(user: User) {
    this._http.post('http://localhost:4512/api/controller/SaveUSer', user)
  }

  SaveTask(_task: Task) {
    this._http.post('', _task);
  }

  LoginUser() {

  }

  GetTask() {

  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
