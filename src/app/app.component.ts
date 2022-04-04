import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesComponent } from './cookies/cookies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CookiesComponent],
})
export class AppComponent implements OnInit {
  title = 'gutov-net';

  constructor(public router: Router, private cookiesApp: CookiesComponent) {}

  ngOnInit() {
    return this.cookiesApp;
  }
}
