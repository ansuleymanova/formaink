import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/api/v1/users/', {
      email: email,
      password: password,
      username: email
    });
  }
}
