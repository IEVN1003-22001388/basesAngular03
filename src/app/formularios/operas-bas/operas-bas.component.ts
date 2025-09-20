import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacion: string = 'suma';

  sumar(): void {
    switch (this.operacion) {
      case 'suma':
        this.resultado = parseFloat(this.num1) + parseFloat(this.num2);
        break;
      case 'resta':
        this.resultado = parseFloat(this.num1) - parseFloat(this.num2);
        break;
      case 'multiplicacion':
        this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
        break;
      case 'division':
        this.resultado = parseFloat(this.num2) !== 0 
          ? parseFloat(this.num1) / parseFloat(this.num2) 
          : 0;
        break;
    }
  }
}