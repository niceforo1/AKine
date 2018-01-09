import { RouterModule, Routes } from '@angular/router';
import {DoctorScheduleComponent} from "./components/doctor-schedule/doctor-schedule.component";
import {HomeComponent} from "./components/home/home.component";
import {AddDoctorComponent} from "./components/add-doctor/add-doctor.component";

const APP_ROUTES: Routes = [
  { path: 'doctor', component: DoctorScheduleComponent },
  { path: 'add-doctor', component: AddDoctorComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
