import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  users: { id: number; name: string; }[];
  title = 'gutov-net';
  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {

    this.users = this.usersService.getAll();

  }
}
