import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
})
export class CookiesComponent implements OnInit {
  public cookieName = '';
  public allCookies: any = '';
  constructor(private cookieService: CookieService) {}
  setCookie() {
    this.cookieService.set('name', 'Tutorialswebsite');
  }

  deleteCookie() {
    this.cookieService.delete('name');
  }

  deleteAll() {
    this.cookieService.deleteAll();
  }

  ngOnInit(): void {
    this.cookieName = this.cookieService.get('name');
    this.allCookies = this.cookieService.getAll(); // get all cookies object
  }
}
