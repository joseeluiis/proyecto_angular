import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar'; // Ajusta según tus archivos
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // Añadimos CommonModule para directivas básicas si fueran necesarias
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'Mi Portfolio Profesional';

  ngOnInit(): void {
    this.cargarPreferenciaTema();
  }

  /**
   * TEMA 14: Integración de Almacenamiento Web (localStorage)
   * Recupera la configuración de tema guardada por el usuario.
   */
  private cargarPreferenciaTema(): void {
    try {
      const temaGuardado = localStorage.getItem('user-theme');
      if (temaGuardado) {
        document.body.classList.add(temaGuardado);
      } else {
        // Por defecto, si no hay nada, podemos poner modo dark o light
        document.body.classList.add('light-theme');
      }
    } catch (error) {
      // TEMA 13: Manejo de errores controlado
      console.error("Error al acceder a localStorage:", error);
    }
  }

  /**
   * Método para cambiar el tema y persistirlo (cumple directriz de Tema 14)
   */
  public toggleTheme(): void {
    try {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('user-theme', 'light-theme');
      } else {
        document.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('user-theme', 'dark-theme');
      }
    } catch (e) {
      console.error("No se pudo guardar la preferencia de tema", e);
    }
  }
}
