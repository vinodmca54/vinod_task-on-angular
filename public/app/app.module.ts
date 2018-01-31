import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './app.home';
import { LoginComponent }  from './app.login';
import { PageNotFoundComponent }  from './app.pageNotFound';
import { RegistrationComponent }  from './app.registration';
import { AppRoutingModule }  from './app.routing';
import { appService } from './injection/service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, AppRoutingModule],
  declarations: [ RegistrationComponent, AppComponent, HomeComponent, LoginComponent, PageNotFoundComponent],
  providers: [appService],
  bootstrap:    [ HomeComponent]
})
export class AppModule { }
