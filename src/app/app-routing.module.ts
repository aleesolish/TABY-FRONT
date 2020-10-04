import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//Componentes 
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LogInComponent } from './log-in/log-in.component';
import {MoodComponent} from './mood/mood.component';
import {DetailComponent} from './detail/detail.component';



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
