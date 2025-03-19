import { Routes, provideRouter, withHashLocation  } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // Tus rutas aquí, por ejemplo:
  { path: '', component: AppComponent }
];

export const appRouting = provideRouter(routes, withHashLocation());
