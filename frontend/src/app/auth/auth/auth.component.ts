import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) return;
    if (this.isLoginMode) return
    else {
      const email = form.value.email;
      const password = form.value.password;
      this.authService
        .signup(email, password)
        .subscribe(responseData => {
          console.log(responseData);
        }, error => {
          console.log(error)});
    };

    form.reset();
  }

}
