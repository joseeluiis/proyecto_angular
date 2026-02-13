import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    darkMode = signal<boolean>(false);

    constructor() {
        // Load saved theme or default to light
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.darkMode.set(savedTheme === 'dark');
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.darkMode.set(prefersDark);
        }

        // Apply theme on change
        effect(() => {
            const isDark = this.darkMode();
            if (isDark) {
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    toggleTheme() {
        this.darkMode.update(prev => !prev);
    }
}
