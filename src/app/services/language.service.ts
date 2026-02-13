import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLang = signal<Language>('es');

    translations: Record<Language, Record<string, string>> = {
        es: {
            'nav.home': 'Inicio',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Contacto',
            'home.greeting': 'Hola, soy Jose Luis',
            'home.intro': 'Soy estudiante de programación y este es mi sitio web creado con Angular.',
            'home.title': 'Desarrollador Full Stack',
            'home.subtitle': 'Creando soluciones web modernas y escalables.',
            'home.cta': 'Ver Proyectos',
            'portfolio.title': 'Mis Proyectos',
            'portfolio.viewCode': 'Ver Código',
            'portfolio.project.kibo.desc': 'App para ahorrar y gestionar tus finanzas',
            'portfolio.project.portfolio.desc': 'Portfolio personal con HTML y CSS',
            'contact.title': 'Contacto',
            'contact.placeholder.name': 'Tu nombre',
            'contact.placeholder.email': 'Tu correo',
            'contact.placeholder.message': 'Tu mensaje',
            'contact.error.name': 'Mínimo 3 letras',
            'contact.error.email': 'Email no válido',
            'contact.send': 'Enviar Mensaje',
            'contact.success': '¡Mensaje enviado!',
            'footer.rights': 'Todos los derechos reservados.',
            'footer.developed': 'Desarrollado con Angular',
            'theme.dark': 'Cambiar a modo oscuro',
            'theme.light': 'Cambiar a modo claro',
            'lang.switch': 'Switch to English'
        },
        en: {
            'nav.home': 'Home',
            'nav.portfolio': 'Portfolio',
            'nav.contact': 'Contact',
            'home.greeting': 'Hi, I am Jose Luis',
            'home.intro': 'I am a programming student and this is my website created with Angular.',
            'home.title': 'Full Stack Developer',
            'home.subtitle': 'Building modern and scalable web solutions.',
            'home.cta': 'View Projects',
            'portfolio.title': 'My Projects',
            'portfolio.viewCode': 'View Code',
            'portfolio.project.kibo.desc': 'App to save and manage your finances',
            'portfolio.project.portfolio.desc': 'Personal portfolio with HTML and CSS',
            'contact.title': 'Contact',
            'contact.placeholder.name': 'Your name',
            'contact.placeholder.email': 'Your email',
            'contact.placeholder.message': 'Your message',
            'contact.error.name': 'Minimum 3 letters',
            'contact.error.email': 'Invalid email',
            'contact.send': 'Send Message',
            'contact.success': 'Message sent!',
            'footer.rights': 'All rights reserved.',
            'footer.developed': 'Developed with Angular',
            'theme.dark': 'Switch to dark mode',
            'theme.light': 'Switch to light mode',
            'lang.switch': 'Cambiar a Español'
        }
    };

    constructor() {
        const savedLang = localStorage.getItem('lang') as Language;
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            this.currentLang.set(savedLang);
        }
    }

    setLanguage(lang: Language) {
        this.currentLang.set(lang);
        localStorage.setItem('lang', lang);
    }

    toggleLanguage() {
        this.setLanguage(this.currentLang() === 'es' ? 'en' : 'es');
    }

    translate(key: string): string {
        const lang = this.currentLang();
        return this.translations[lang][key] || key;
    }
}
