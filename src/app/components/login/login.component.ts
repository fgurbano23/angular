import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {AjaxServices} from '../../services/ajax.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: string;
  public pass: string;
  constructor(private _services: AjaxServices, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(loginForm) {
    // console.log(this.user);
    if (this._services.setUserActive(this.user, this.pass)) {
      this._router.navigate (['/out']);
    }
    // loginForm.form.reset();
  }

}
