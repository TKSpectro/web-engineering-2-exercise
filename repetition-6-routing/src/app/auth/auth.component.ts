import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  password!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    localStorage.setItem('we-token', 'password');
  }

  loginWrong() {
    localStorage.setItem('we-token', '1234567890');
  }

  redirect() {
    this.router.navigate(['./some-form']);
  }

  logout() {
    localStorage.removeItem('we-token');
    this.router.navigate(['./auth']);
  }
}
