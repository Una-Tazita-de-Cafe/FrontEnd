import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './Components/Error/Error.component';
import { InicioComponent } from './Components/Inicio/Inicio.component';

const routes: Routes = [
  { path: "" ,component:InicioComponent},
  { path: '**', component: ErrorComponent } // Ejemplo de otra ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
