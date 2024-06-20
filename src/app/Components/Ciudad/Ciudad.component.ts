import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/Model';

@Component({
  selector: 'app-Ciudad',
  templateUrl: './Ciudad.component.html',
  styleUrls: ['./Ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  @Input() lista: any[] = [];
  @Output() nombreSeleccionado = new EventEmitter<string>();
  opcionSeleccionada: string =''; // Permitir que opcionSeleccionada sea nullable

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarOpcion(): void {
    this.nombreSeleccionado.emit(this.opcionSeleccionada);
  }
}
