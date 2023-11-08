import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');
  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });
  eyeClick(event: any) {
    if (event.type == 'password') {
      event.type = 'text'
    }
    else {
      event.type = 'password'
    }
  }
}
