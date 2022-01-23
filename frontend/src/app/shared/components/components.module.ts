import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { ButtonEmphasisComponent } from './button-emphasis/button-emphasis.component';
import { InputComponent } from './input/input.component';
import { TopbarComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';

const components = [
  ButtonPrimaryComponent,
  ButtonEmphasisComponent,
  InputComponent,
  TopbarComponent
]


@NgModule({
  declarations: [
    components,
    TopbarComponent
  ],
  exports: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
