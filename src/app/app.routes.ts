import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { RegisterPage } from './register-page/register-page';
import { About } from './about/about';
import { Login } from './page/login/login';

export const routes: Routes = [
    { path: '',
         component:LandingPage
         },
    {
       path:'about',
         component:About    
         },
    { path: 'register', 
        component:RegisterPage
     },
    {
        path:'login',
        component:Login
    }

];
