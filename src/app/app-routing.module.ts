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
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { MainComponent } from './main/main.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
