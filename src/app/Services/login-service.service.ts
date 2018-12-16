import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private _http:HttpClient) { }

  Login(user){     
    return this._http.post("http://api.octainfotech.com/api/account/login",user);       
  }
}
