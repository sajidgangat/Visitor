import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AppRouting } from './app.route';
import { HeaderComponent } from './user/header/header.component';
import { ContentsComponent } from './user/contents/contents.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgetpasswordComponent,
    HeaderComponent,
    ContentsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
