import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string | undefined;
  password : string | undefined
  confirmPassword : string | undefined

  constructor() { }

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    await Preferences.set({
      key: 'user',
      value: JSON.stringify({ email: this.email, password: this.password }),
    });

    alert('Registration successful!');
  }
  ngOnInit() {
  }

}
