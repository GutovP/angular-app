import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersResolver } from 'src/app/services/users/users-resolver';
import { UsersGuardService } from 'src/app/services/guards/users-guard.service';



const routes: Routes = [
    {
        path: '', component: UsersListComponent,
        resolve: {
            users: UsersResolver
        }
    },
    {
        path: ':id', component: UsersListComponent, canActivate: [UsersGuardService]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
