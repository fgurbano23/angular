import { Component, OnInit } from '@angular/core';
import {AjaxServices} from '../../services/ajax.service';
import {routing} from '../../app.routing';
import {UserModel} from '../../models/user.model';
import {Router, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {
  public dataUser: UserModel;
  public restAux: any;
  constructor(private _services: AjaxServices, private _router: Router) {
    this.dataUser = this._services.getUserActive();
  }

  ngOnInit() {
    this.dataUser = this._services.getUserActive();
    // --- REST CONSUMER --
    this._services.getUser().subscribe(
      result => {
        this.restAux = result;
      },
      error => {
        console.log(<any> error);
      }
    );
  }

  onCloseSession(){
    this._services.closePersistentLogin();
    this._router.navigate (['/']);
  }
}
