import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        {
            path: 'users',
            loadChildren: '.././users/users.module#UsersModule'
        }
    ]
  }
];

export const mainRouting: ModuleWithProviders = RouterModule.forChild(mainRoutes);
