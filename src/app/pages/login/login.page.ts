import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(private navCtrl: NavController, public router: Router) { }

  async login() {
    const { value } = await Preferences.get({ key: 'user' });
    const user = value ? JSON.parse(value) : null;

    if (user && user.email === this.email && user.password === this.password) {
      alert('Login successful!');
      this.navCtrl.navigateRoot('/home');
    } else {
      alert('Invalid credentials!');
    }
  }

  toRegister(){
    this.router.navigateByUrl('register')
  }
  
  ngOnInit() {
  }

}
