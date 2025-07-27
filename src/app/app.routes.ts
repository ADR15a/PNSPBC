import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent }
];