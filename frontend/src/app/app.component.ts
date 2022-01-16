import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User | null;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe((x) => (this.user = x));
  }
}
