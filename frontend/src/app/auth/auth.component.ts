import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/'])
    }

  }

  ngOnInit(): void {
  }

}
