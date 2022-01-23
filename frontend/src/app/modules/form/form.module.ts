import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormViewComponent } from './form-view/form-view.component';

@NgModule({
  declarations: [FormCreateComponent, FormViewComponent],
  exports: [FormCreateComponent, FormViewComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
