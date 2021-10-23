import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user";
import { FormService } from '../form.service';
import { subscribeOn } from 'rxjs/operators';

export interface Form {
  title: string,
  slug: string,
  header_image?: string,
  description: string
}

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {

  user: User | null;
  form: FormGroup;
  var: any;

  constructor(
    private formBuilder: FormBuilder,
    public formService: FormService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      slug: [
        '', 
        [ Validators.required, 
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_@\.]{2,20}$') ]   
      ],
      description: ['', Validators.required]
    });
  }

  createForm() {
    let formData = {
      "title": this.form.controls.title.value,
      "slug": this.form.controls.slug.value,
      "description": this.form.controls.description.value
    }
    this.formService.createForm(formData).subscribe(
      () => { 
        this.formService.formAdded.next(true)
        this.form.reset();
      },
      error => console.log(error)
    )
  }
}
