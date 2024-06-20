import { Component } from '@angular/core';
import { Pais } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
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
}

