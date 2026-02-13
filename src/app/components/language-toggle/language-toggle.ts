import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { NgClass, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-language-toggle',
    standalone: true,
    imports: [NgClass, UpperCasePipe],
    templateUrl: './language-toggle.html',
    styleUrl: './language-toggle.css'
})
export class LanguageToggleComponent {
    languageService = inject(LanguageService);
}
