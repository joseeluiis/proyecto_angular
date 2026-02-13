import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // <-- ¡Importante para que funcionen los links!
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {}

export class Navbar {
}
