import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./pages/proyectos/proyectos.component').then((m) => m.ProyectosComponent),
  },
  {
    path: 'musica',
    loadComponent: () =>
      import('./pages/musica/musica.component').then((m) => m.MusicaComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then((m) => m.ContactoComponent),
  },

  { path: '**', redirectTo: 'home' },
];
