import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TopbarComponent} from './library/topbar/topbar.component';
import {AlertComponent} from './library/alert/alert.component';
import {AuthModule} from "./auth/auth.module";
import {InputComponent} from './library/input/input.component';
import {FormModule} from "./form/form.module";
import {AuthInterceptor} from "./auth/helpers/auth.interceptor";
import {ErrorInterceptor} from "./auth/helpers/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    AlertComponent,
    InputComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AuthModule,
    FormModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
