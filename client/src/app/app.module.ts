import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import {APP_ROUTING} from "./app.routes";
import { HomeComponent } from './components/home/home.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
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
    TopBarComponent,
    SideBarComponent,
    FloatIconsComponent,
    MorphsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
