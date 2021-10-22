import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {
  user: User | null;

  constructor(private authService: AuthService, private http: HttpClient) { 
    this.authService.currentUser$.subscribe(x => this.user = x);

  }

}
