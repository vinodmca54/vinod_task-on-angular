import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './app.login';
import { PageNotFoundComponent }  from './app.pageNotFound';
import { RegistrationComponent }  from './app.registration';
const appRoutes: Routes = [
  { path: 'crisis-center', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ } 
