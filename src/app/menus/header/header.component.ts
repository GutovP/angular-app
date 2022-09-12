import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { CustomPreloadingService } from '../../services/custom-preloading/custom-preloading.service';

class MenuItem {
  constructor(
    public caption: string,
    public path: string,
    public link: any[]
  ) {}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public navbarCollapsed = true;
  menuItems: MenuItem[];
  accountItems: MenuItem[];

  searchTerm$ = new Subject<string>();

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      { caption: 'Home', path: 'home', link: ['/home'] },
      { caption: 'Contact', path: 'contact', link: ['/contact'] },
      { caption: 'Users', path: 'users', link: ['/users'] },
      { caption: 'Rest-Api', path: 'restApi', link: ['/restApi'] },
    ];
    this.accountItems = [
      { caption: 'Login', path: 'login', link: ['/login'] },
      { caption: 'Register', path: 'register', link: ['/register'] },
    ];
  }
}
