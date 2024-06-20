import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/Model';

@Component({
  selector: 'app-Pantalla_1',
  templateUrl: './Pantalla_1.component.html',
  styleUrls: ['./Pantalla_1.component.css']
})
export class Pantalla_1Component implements OnInit {
  filtroP:Pais[]| null = null;
  pais:Pais[]=[
    new Pais('Inglaterra', [{ Nombre: 'Londres' }, { Nombre: 'Manchester' }]),
    new Pais('Japón', [{ Nombre: 'Tokio' }, { Nombre: 'Osaka' }]),
    new Pais('India', [{ Nombre: 'Delhi' }, { Nombre: 'Bombay' }]),
    new Pais('Dinamarca', [{ Nombre: 'Copenhague' }, { Nombre: 'Aarhus' }])
  ]
  NombreOctenido(nombre:string){
    //Implementar api
    this.filtroP=this.pais.filter(p=>p.Nombre==nombre);  
  }
  constructor() { }

  ngOnInit() {
  }

}
