import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-OctenerCiudad',
  templateUrl: './OctenerCiudad.component.html',
  styleUrls: ['./OctenerCiudad.component.css']
})
export class OctenerCiudadComponent implements OnInit {
  @Input() lista:any
  constructor() { }

  ngOnInit() {
  }

}
