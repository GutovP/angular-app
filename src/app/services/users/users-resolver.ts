import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any>{

  constructor(private usersService: UsersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.usersService.getAllUsers();
  }
}
