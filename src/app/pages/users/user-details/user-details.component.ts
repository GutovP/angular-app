import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // the + sign turns a string to number
    const id = +this.activatedRoute.snapshot.params.id;

    console.log(id);

    this.user = this.usersService.getById(id);
  }

}
