import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormViewComponent } from './form-view/form-view.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/helpers/auth.interceptor';

@NgModule({
  declarations: [FormCreateComponent, FormViewComponent],
  exports: [FormCreateComponent, FormViewComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class FormModule {}
