import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './Components/Error/Error.component';
import { Pantalla_1Component } from './Components/Pantalla_1/Pantalla_1.component';
import { Pantalla_2Component } from './Components/Pantalla_2/Pantalla_2.component';

const routes: Routes = [
  {path: "" ,component:Pantalla_1Component},
  {path:"Presupuesto",component:Pantalla_2Component},
  {path: '**', component: ErrorComponent } // Ejemplo de otra ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
