import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
