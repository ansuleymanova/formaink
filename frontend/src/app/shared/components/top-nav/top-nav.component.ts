import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopbarComponent {
  user: User | null;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe((x) => (this.user = x));
  }

  logout() {
    return this.authService.logout();
  }



}
