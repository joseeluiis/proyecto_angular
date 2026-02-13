import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  proyectos = [
    {
      titulo: 'Kibo',
      desc: 'App para ahorrar y gestionar tus finanzas',
      imagen: '/Kibo.png',
      repo: 'https://github.com/Alexiscf0/TFG_BANK'
    },
    {
      titulo: 'Portfolio',
      desc: 'Portfolio personal con HTML y CSS ',
      imagen: '/img.png',
      repo: 'https://github.com/joseeluiis/Portfolio'
    }
  ];
}
