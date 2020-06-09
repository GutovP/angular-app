import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],

})
export class UsersListComponent implements OnInit {

  users: any;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    this.users = this.usersService.getAll();
  }

  addUser(name: any) {
    const id = this.users.length + 1;

    this.usersService.addUser({ id, name });
  }
}
