import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes=[
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main',
        loadChildren: './main/main.module#MainModule'
    }
]


export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes,
  { useHash: true , preloadingStrategy: PreloadAllModules});