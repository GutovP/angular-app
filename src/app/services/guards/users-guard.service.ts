import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuardService implements CanActivate {

  constructor(private usersService: UsersService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = +route.params.id;

    const userFound = this.usersService.getUserById(id);

    let check = true;

    if (userFound) {
      check = true;
    } else {
      this.router.navigate(['**']);
      check = false;
    }
    return check;
  }
}
