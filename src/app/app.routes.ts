import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { RegisterPage } from './register-page/register-page';

export const routes: Routes = [
    { path: '',
         component:LandingPage
         },
    { path: 'register', 
        component:RegisterPage
     }
];
