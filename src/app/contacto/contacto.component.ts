import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // NECESARIO para usar routerLink

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule], // Importa RouterModule aquí
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'] // Estaba mal escrito como styleUrl
})
export class ContactoComponent { }
