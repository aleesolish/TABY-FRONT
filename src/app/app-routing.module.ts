import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//Componentes 
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LogInComponent } from './log-in/log-in.component';
import {MoodComponent} from './mood/mood.component';
import {DetailComponent} from './detail/detail.component';
import { NewhabComponent } from './newhab/newhab.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterProfileComponent } from './admin-register-profile/admin-register-profile.component';
import { AdminUpdateProfileComponent } from './admin-update-profile/admin-update-profile.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { MainComponent } from './main/main.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { SuperAdminRegisterAdminComponent } from './super-admin-register-admin/super-admin-register-admin.component';
import { SuperAdminUpdateAdminComponent } from './super-admin-update-admin/super-admin-update-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'newhab',
    component: NewhabComponent
  },
  {
    path: 'mood',
    component: MoodComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: 'super-admin',
    component: SuperAdminComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'super-admin-login',
    component: SuperAdminLoginComponent
  },
  {
    path: 'super-admin-register-admin',
    component: SuperAdminRegisterAdminComponent
  },
  {
    path: 'super-admin-update-admin',
    component: SuperAdminUpdateAdminComponent
  },
  {
    path: 'admin-register-profile',
    component: AdminRegisterProfileComponent
  },
  {
    path: 'admin-update-profile',
    component: AdminUpdateProfileComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'admin-register',
    component: AdminRegisterComponent
  },
  {
    path: 'login-admin',
    component: LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
