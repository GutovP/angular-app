import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { SearchService } from 'src/app/services/search/search.service';
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
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(public router: Router, private searchService: SearchService) {
    // this.searchService.search(this.results).subscribe((results) => {
    //   this.results = results;
    // });
  }

  ngOnInit(): void {
    this.menuItems = [
      { caption: 'Home', path: 'home', link: ['/home'] },
      { caption: 'Contact', path: 'contact', link: ['/contact'] },
      { caption: 'Users', path: 'users', link: ['/users'] },
      { caption: 'Rest-Api', path: 'restApi', link: ['/restApi'] },
    ];
  }
}
