import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AjaxServices} from './services/ajax.service';
import {LoginComponent} from './components/login/login.component';
import {OutComponent} from './components/out/out.component';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
  { path: '',
    component: LoginComponent,
  },
  {
    path: 'out',
    component: OutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

