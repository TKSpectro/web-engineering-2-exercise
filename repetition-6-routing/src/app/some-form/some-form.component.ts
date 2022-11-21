import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-some-form',
  templateUrl: './some-form.component.html',
  styleUrls: ['./some-form.component.scss'],
})
export class SomeFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('we-token');
    this.router.navigate(['./auth']);
  }
}
