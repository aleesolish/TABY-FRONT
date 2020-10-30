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

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { MainComponent } from './main/main.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { AdminRegisterProfileComponent } from './admin-register-profile/admin-register-profile.component';
import { AdminUpdateProfileComponent } from './admin-update-profile/admin-update-profile.component';
import { SuperAdminRegisterAdminComponent } from './super-admin-register-admin/super-admin-register-admin.component';
import { SuperAdminUpdateAdminComponent } from './super-admin-update-admin/super-admin-update-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';


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
    MainComponent,
    SuperAdminLoginComponent,
    AdminRegisterProfileComponent,
    AdminUpdateProfileComponent,
    SuperAdminRegisterAdminComponent,
    SuperAdminUpdateAdminComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
    
  ],
  providers: [
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
