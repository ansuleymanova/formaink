import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { ButtonEmphasisComponent } from './button-emphasis/button-emphasis.component';



@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonEmphasisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
