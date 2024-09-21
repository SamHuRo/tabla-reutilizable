import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'keyboardsList',
        loadComponent:() => import('./pages/keyboard-list/keyboard-list.component'),
    },{
        path: 'mouseList',
        loadComponent:() => import('./pages/mouse-list/mouse-list.component'),
    },{
        path: '',
        redirectTo: '/keyboardsList',
        pathMatch: 'full'
    }
];
