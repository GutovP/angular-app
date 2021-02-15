import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from 'src/app/services/users/users.service';






@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],

})
export class UsersListComponent implements OnInit {
  users: any;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }



  activeUser: { id: number; name: string; age: number; };

  ngOnInit(): void {

    // this.users = this.activatedRoute.snapshot.data.users;
    this.users = this.usersService.getAllUsers()/* .subscribe(users => this.users = users) */;

    this.activatedRoute.params.subscribe(params => {

      const id = +params.id;

      this.activeUser = this.usersService.getUserById(id);
    });

  }

  addUser(name: string, age: number) {
    const id = this.users.length + 1;

    this.usersService.addUser({ id, name, age });


  }

}

