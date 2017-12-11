import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {APP_ROUTING} from "./app.routes";
import {HomeComponent} from './components/home/home.component';
import {PrincipalComponent} from './components/pacientes/principal/principal.component';
import {HttpClientModule} from "@angular/common/http";
import {LoadingComponent} from './components/shared/loading/loading.component';
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import { AgregarPacienteComponent } from './components/pacientes/agregar-paciente/agregar-paciente.component';
import { EditarPacienteComponent } from './components/pacientes/editar-paciente/editar-paciente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrincipalComponent,
    LoadingComponent,
    AgregarPacienteComponent,
    EditarPacienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
