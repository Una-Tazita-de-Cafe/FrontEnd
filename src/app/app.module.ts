import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CiudadComponent } from './Components/Ciudad/Ciudad.component';
import { OctenerCiudadComponent } from './Components/OctenerCiudad/OctenerCiudad.component';
import { InicioComponent } from './Components/Inicio/Inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadComponent,
    OctenerCiudadComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
