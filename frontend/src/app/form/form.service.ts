import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  public formAdded: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.formAdded = new Subject<boolean>();
  }

  getForms() {
    return this.http.get(`${environment.apiUrl}surveys/`);
  }

  createForm(formData: any) {
    return this.http.post(`${environment.apiUrl}surveys/`, formData);
  }
}
