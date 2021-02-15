import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable()
export class UsersService {

  users: any = [
    { id: 1, name: 'Steven', age: 40 },
    { id: 2, name: 'Viktor', age: 35 },
    { id: 3, name: 'Karina', age: 10 },
    { id: 4, name: 'Vanessa', age: 6 }
  ];

  /*  private uri = 'assets/data/users.json'; */
  /* constructor(private httpClient: HttpClient) { }
 */
  getAllUsers() {
    return this.users;


  }
  addUser(user: { id: number, name: string, age: number }) {
    this.users.push(user);
  }

  getUserById(id: number) {

    return this.users.find((x: { id: number; }) => x.id === id);
  }
}
