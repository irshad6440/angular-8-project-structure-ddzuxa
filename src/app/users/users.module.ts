import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';

@NgModule({
  imports:      [ CommonModule, UsersRoutingModule ],
  declarations: [ UserListComponent, UserDetailsComponent, UserSearchComponent, UsersComponent ]
})
export class UsersModule { }
