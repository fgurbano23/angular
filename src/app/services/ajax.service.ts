import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserModel} from '../models/user.model';
import {Injectable} from '@angular/core';


@Injectable()
export class AjaxServices {
  private userActive: UserModel;
  aux: any;
  // private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  constructor(public _http: HttpClient) {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.aux = JSON.parse(localStorage.getItem('user'));
      this.userActive = new UserModel( this.aux.userName, this.aux.password);
    }
  }
  setUserActive(user: string, pass: string): UserModel {
    this.userActive = new UserModel(user, pass);
    localStorage.setItem('user', JSON.stringify (this.userActive));
    return this.userActive;
  }
  getUserActive() {
    return this.userActive;
  }
  closePersistentLogin() {
    localStorage.removeItem('user');
  }
  isUserLogged() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }
  getUser():  Observable <any> {
    return this._http.get('http://localhost:8080/users');
  }

}
