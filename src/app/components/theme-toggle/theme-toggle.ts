import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [NgClass],
    templateUrl: './theme-toggle.html',
    styleUrl: './theme-toggle.css'
})
export class ThemeToggleComponent {
    themeService = inject(ThemeService);
}
