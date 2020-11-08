import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoodComponent } from './mood/mood.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewhabComponent } from './newhab/newhab.component';
import {HttpClientModule} from '@angular/common/http';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

import { DataService } from './services/data.service';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLogComponent } from './admin-log/admin-log.component';


@NgModule({
  declarations: [
    AppComponent,
    MoodComponent,
    HomeComponent,
    DetailComponent,
    AdminLoginComponent,
    AdminComponent,
    SuperAdminComponent,
    LogInComponent,
    NewhabComponent,
    AdminRegisterComponent,
    AdminLogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule
    
  ],
  providers: [DataService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '90233886143-nu71ligpm3a0jan1tabel05r4ajo5t0l.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('655051641837184'),
          }
        ],
      } as SocialAuthServiceConfig,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
