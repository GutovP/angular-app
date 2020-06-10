import { NgModule } from '@angular/core';

import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { MenusSharedModule } from 'src/app/menus/menus-shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersResolver } from 'src/app/services/users/users-resolver';




@NgModule({
  declarations: [UsersListComponent, UserComponent, UserDetailsComponent],
  imports: [
    UsersRoutingModule,
    MenusSharedModule,

  ],
  providers: [UsersResolver],
})
export class UsersModule { }
