import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from "./helpers/auth-routing.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./helpers/auth.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule
  ],
})
export class AuthModule {
}
