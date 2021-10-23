import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../auth/helpers/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  user: User | null;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe((x) => (this.user = x));
  }
  logout() {
    return this.authService.logout();
  }
  ngOnInit(): void {}
}
