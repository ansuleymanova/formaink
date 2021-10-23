import {Component, OnInit} from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  forms: any;
  getForms() {
    let forms = this.formService.getForms();
    return forms;
  }
  
  constructor(private formService: FormService) {
  }
  
  ngOnInit() {
    this.formService.getForms()
    this.initFormAdded()
  }
  
  public initFormAdded() {
    this.formService.formAdded
    .subscribe((data: boolean) => {
      if (data) {
        this.forms = this.formService.getForms();
      }
    })
    this.forms = this.getForms();
  }
}
