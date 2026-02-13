import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  onSubmit() {
    try {
      if (this.contactForm.invalid) {
        throw new Error("Formulario no válido");
      }
      // Lógica de envío...
      console.log("Enviado con éxito");
    } catch (error) {
      console.error("Error controlado:", error);
      alert("Hubo un problema al enviar el mensaje.");
    }
  }
}
