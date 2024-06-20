import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/Model';

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
  styleUrls: ['./Inicio.component.css']
})
export class InicioComponent implements OnInit {
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
