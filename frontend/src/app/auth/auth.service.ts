import { Injectable } from '@angular/core';

import { User } from "../models/user";

import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject$: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;
  public redirectUrl: string;

  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject$ = new BehaviorSubject<User | null>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser$ = this.currentUserSubject$.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject$.value;
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}auth/token/login/`, { email, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject$.next(user)
        return user;
      }))
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null);
    this.router.navigate(['auth']);
  }

  register(user: User) {
    return this.http.post<User>(`${environment.apiUrl}users/`, user)
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }
}
