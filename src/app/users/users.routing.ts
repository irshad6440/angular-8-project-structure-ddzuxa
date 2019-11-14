import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersComponent } from './users.component';

const usesRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        {
            path: 'search',
            component: UserSearchComponent
        },
        {
            path: 'list',
            component: UserListComponent
        },
        {
            path: 'details',
            component: UserDetailsComponent
        }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(usesRoutes)],
exports: [RouterModule]
})
export class UsersRoutingModule {}