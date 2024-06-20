import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CiudadComponent } from './Components/Pantalla_1/Components/Ciudad/Ciudad.component';
import { OctenerCiudadComponent } from './Components/Pantalla_1/Components/OctenerCiudad/OctenerCiudad.component';
import { Pantalla_2Component } from './Components/Pantalla_2/Pantalla_2.component';
import { Pantalla_1Component } from './Components/Pantalla_1/Pantalla_1.component';

@NgModule({
  declarations: [	
    AppComponent,
    CiudadComponent,
    OctenerCiudadComponent,
      Pantalla_2Component,
      Pantalla_1Component
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
