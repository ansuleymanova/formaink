import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) { }
  logout() {
    return this.authService.logout()
  }

  ngOnInit(): void {
  }



}
