import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PrincipalComponent} from "./components/pacientes/principal/principal.component";
import {AgregarPacienteComponent} from "./components/pacientes/agregar-paciente/agregar-paciente.component";
import {EditarPacienteComponent} from "./components/pacientes/editar-paciente/editar-paciente.component";

const APP_ROUTES: Routes = [
  { path: 'pacientes', component: PrincipalComponent },
  { path: 'pacientes/agregar', component: AgregarPacienteComponent },
  { path: 'pacientes/editar/:id', component: EditarPacienteComponent },
/*  { path: 'articulos', component: ListarArticulosComponent },
  { path: 'articulos/agregar', component: AgregarArticuloComponent },
  { path: 'articulos/editar/:id', component: EditarArticuloComponent },
  { path: 'pedidos/agregar', component: AgregarPedidoComponent},
  { path: 'pedidos/listar', component: ListarPedidosComponent},
  { path: 'compras/agregar', component: AgregarCompraComponent},
  { path: 'compras/listar', component: ListarComprasComponent},
  */
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
/*{ path: 'about', component: AboutComponent },
{ path: 'heroes', component: HeroesComponent },
{ path: 'heroe/:id', component: HeroeComponent },
{ path: 'find-heroe/:termino', component: FindHeroeComponent },
*/
