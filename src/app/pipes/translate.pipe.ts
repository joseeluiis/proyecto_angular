import { Pipe, PipeTransform, inject, Signal } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false // Impure to detect signal changes automatically if we don't use the signal in template directly
})
export class TranslatePipe implements PipeTransform {
    languageService = inject(LanguageService);

    transform(key: string): string {
        return this.languageService.translate(key);
    }
}
