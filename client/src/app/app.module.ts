import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import { APP_ROUTING } from "./app.routes";
import { HomeComponent } from './components/home/home.component';
/*DOCTOR*/
import { AddDoctorComponent } from './components/doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './components/doctor/edit-doctor/edit-doctor.component';
import { ListDoctorComponent } from './components/doctor/list-doctor/list-doctor.component';
/*PATIENT*/
import { AddPatientComponent }  from './components/patient/add-patient/add-patient.component';
import { EditPatientComponent }  from "./components/patient/edit-patient/edit-patient.component";
import { ListPatientComponent } from './components/patient/list-patient/list-patient.component';
/*Moduls*/
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { FloatIconsComponent } from './components/shared/float-icons/float-icons.component';
import { MorphsearchComponent } from './components/shared/morphsearch/morphsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorScheduleComponent,
    HomeComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    ListDoctorComponent,
    AddPatientComponent,
    EditPatientComponent,
    ListPatientComponent,
    TopBarComponent,
    SideBarComponent,
    FloatIconsComponent,
    MorphsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
