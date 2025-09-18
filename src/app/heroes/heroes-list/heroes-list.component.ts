import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {

  imagenWhidth:number=40;
  imagenMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }

heroes:any[]=[
    {
    imagen:"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"Goku",
    description:"KameHameHa",
    race:"Saiyan",
    ki:90000
    },
    {
    imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre:"Vegeta",
    description:"Final Flash",
    race:"Saiyan",
    ki:19000
    },
    {
    imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:"Piccolo",
    description:"Malanasapo",
    race:"Namekiano",
    ki:70000
    },
     {
    imagen:"https://dragonball-api.com/characters/Freezer.webp",
    nombre:"Freezer",
    description:"Death Ball",
    race:"Alien",
    ki:70000
    },
 
  ]
}