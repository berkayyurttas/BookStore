import { Routes } from '@angular/router';

export const routes: Routes = [ // İsim 'routes' olmalı, APP_ROUTES değil
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'books',
    loadComponent: () => import('./book/book').then(m => m.BookComponent), // .ts yazmıyoruz
  },
];