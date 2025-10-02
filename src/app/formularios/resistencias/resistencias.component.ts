import { Component } from '@angular/core';
import { CalcularResistencia } from './calcular';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  colores = [
    { nombre: 'Negro', hex: 'black', valor: 0 },
    { nombre: 'Café', hex: '#7B3F00', valor: 1 },
    { nombre: 'Rojo', hex: 'red', valor: 2 },
    { nombre: 'Naranja', hex: 'orange', valor: 3 },
    { nombre: 'Amarillo', hex: 'yellow', valor: 4 },
    { nombre: 'Verde', hex: 'green', valor: 5 },
    { nombre: 'Azul', hex: 'blue', valor: 6 },
    { nombre: 'Morado', hex: 'purple', valor: 7 },
    { nombre: 'Gris', hex: 'gray', valor: 8 },
    { nombre: 'Blanco', hex: 'white', valor: 9 }
  ];

  multiplicadores = [
    { texto: 'x1', valor: 1, hex: 'black', nombre: 'Negro' },
    { texto: 'x10', valor: 10, hex: '#7B3F00', nombre: 'Café' },
    { texto: 'x100', valor: 100, hex: 'red', nombre: 'Rojo' },
    { texto: 'x1000', valor: 1000, hex: 'orange', nombre: 'Naranja' },
    { texto: 'x10000', valor: 10000, hex: 'yellow', nombre: 'Amarillo' },
    { texto: 'x100000', valor: 100000, hex: 'green', nombre: 'Verde' },
    { texto: 'x1000000', valor: 1000000, hex: 'blue', nombre: 'Azul' },
    { texto: 'x0.1', valor: 0.1, hex: 'gold', nombre: 'Dorado' },
    { texto: 'x0.01', valor: 0.01, hex: 'silver', nombre: 'Plata' }
  ];

  tolerancias = [
    { nombre: 'Dorado 5%', valor: 0.05, hex: 'gold' },
    { nombre: 'Plata 10%', valor: 0.1, hex: 'silver' }
  ];

  banda1: number = 0;
  banda2: number = 0;
  banda3: number = 1;

  color1: string = '';
  color2: string = '';
  color3: string = '';
  color1Hex: string = '';
  color2Hex: string = '';
  color3Hex: string = '';
  tolHex: string = '';
  tolerancia: number = 0;
  toleranciaNombre: string = '';

  valorBase: number = 0;
  valorMax: number = 0;
  valorMin: number = 0;
  resultado: boolean = false;


  setBanda1(i: number) {
    this.banda1 = this.colores[i].valor;
    this.color1 = this.colores[i].nombre;
    this.color1Hex = this.colores[i].hex;
  }

  setBanda2(i: number) {
    this.banda2 = this.colores[i].valor;
    this.color2 = this.colores[i].nombre;
    this.color2Hex = this.colores[i].hex;
  }

  setBanda3(m: any) {
    this.banda3 = m.valor;
    this.color3 = m.nombre;
    this.color3Hex = m.hex;
  }

  setTolerancia(t: any) {
    this.tolerancia = t.valor;
    this.toleranciaNombre = t.nombre;
    this.tolHex = t.hex;
  }

  calcularResistencia() {
    const { valorBase, valorMax, valorMin } =
      CalcularResistencia.calcular(
        this.banda1,
        this.banda2,
        this.banda3,
        this.tolerancia
      );

    this.valorBase = valorBase;
    this.valorMax = valorMax;
    this.valorMin = valorMin;
    this.resultado = true;
  }
}