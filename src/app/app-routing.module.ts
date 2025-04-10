import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente404Component } from './componente404/componente404.component';
import { ImprimeComponent } from './imprime/imprime.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { PreciosComponent } from './precios/precios.component';
import { VersuscripcionComponent } from './versuscripcion/versuscripcion.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';

const routes: Routes = [
  {path:'', redirectTo: 'inscripcion', pathMatch: 'full'},
  {path:'inscripcion', component: InscripcionComponent},
  {path:'listadoclientes', component: ListadoclientesComponent},
  {path:'agregarclientes', component: AgregarClientesComponent},
  {path:'agregarclientes/:clienteID', component: AgregarClientesComponent},
  {path:'precios', component: PreciosComponent},
  {path:'versuscripcion', component: VersuscripcionComponent},
  {path:'imprime', component: ImprimeComponent},
  {path:'**', component: Componente404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
