import { NgModule } from '@angular/core';

import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { MenusSharedModule } from 'src/app/menus/menus-shared.module';



@NgModule({
  declarations: [UsersListComponent, UserComponent],
  imports: [
    UsersRoutingModule,
    MenusSharedModule,
  ],
  providers: [],
})
export class UsersModule { }
