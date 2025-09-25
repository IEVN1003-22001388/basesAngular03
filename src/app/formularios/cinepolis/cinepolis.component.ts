import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  fondo = 'https://cinepremiere.com.mx/wp-content/uploads/2017/09/ayuda-sismo-cinepolis-1024x559.jpg';
  nombre: string = '';
  compradores: number = 0;
  boletos: number = 0;
  tarjeta: string = 'no';
  valorPagar: number = 0;

   procesar() {
    const precioBoleto = 12;
    const maxBoletosPorPersona = 7;
    const maxPermitidos = this.compradores * maxBoletosPorPersona;

    if (this.boletos > maxPermitidos) {
      alert(`No puedes comprar más de ${maxBoletosPorPersona} boletos por persona.
Máximo permitido: ${maxPermitidos}`);
      this.valorPagar = 0;
      return;
    }

    let total = this.boletos * precioBoleto;

    if (this.boletos > 5) {
      total *= 0.85;
    } else if (this.boletos >= 3 && this.boletos <= 5) {
      total *= 0.90;
    }
    if (this.tarjeta === 'si') {
      total *= 0.90;
    }

    this.valorPagar = total;
  }

  salir() {
    this.nombre = '';
    this.compradores = 0;
    this.boletos = 0;
    this.tarjeta = 'no';
    this.valorPagar = 0;
  }
}

