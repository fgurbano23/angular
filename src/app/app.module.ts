import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OutComponent } from './components/out/out.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AjaxServices} from './services/ajax.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {AuthGuard} from './auth.guard';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NgxPaginationModule
  ],
  providers: [
    appRoutingProviders,
    AjaxServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
