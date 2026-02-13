import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la interfaz aquí mismo o la importamos para cumplir el Tema 13
export interface Proyecto {
  titulo: string;
  desc: string;
  imagen: string;
  repo: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent { // <--- Asegúrate de que se llame así
  @Input() proyecto!: Proyecto; // Recibe el objeto proyecto desde el padre
}
