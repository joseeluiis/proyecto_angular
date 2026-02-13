import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  proyectos = [
    {
      titulo: 'Kibo',
      desc: 'portfolio.project.kibo.desc',
      imagen: '/Kibo.png',
      repo: 'https://github.com/Alexiscf0/TFG_BANK'
    },
    {
      titulo: 'Portfolio',
      desc: 'portfolio.project.portfolio.desc',
      imagen: '/img.png',
      repo: 'https://github.com/joseeluiis/Portfolio'
    }
  ];
}
