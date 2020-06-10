import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],

})
export class UsersListComponent implements OnInit {



  constructor(private usersService: UsersService) { }

  users: any;

  ngOnInit(): void {

    this.users = this.usersService.getAll();
  }

  addUser(name: string) {
    const id = this.users.length + 1;

    this.usersService.addUser({ id, name });


  }

}

