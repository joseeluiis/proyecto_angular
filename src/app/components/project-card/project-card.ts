import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="card">
      <img [src]="imagen" alt="Imagen del proyecto">
      <h3>{{ titulo }}</h3>
      <p>{{ descripcion }}</p>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ddd; padding: 15px; border-radius: 5px; text-align: center; }
    img { width: 100%; border-radius: 5px; }
  `]
})
export class ProjectCardComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = 'https://via.placeholder.com/150';
}
