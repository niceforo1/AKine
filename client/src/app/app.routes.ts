import { RouterModule, Routes } from '@angular/router';
import { DoctorScheduleComponent } from "./components/doctor-schedule/doctor-schedule.component";
import { HomeComponent } from "./components/home/home.component";
/*PROFESSIONAL*/
import { AddDoctorComponent } from "./components/doctor/add-doctor/add-doctor.component";
import {ListDoctorComponent} from "./components/doctor/list-doctor/list-doctor.component";

/*PATIENT*/
import { PatientAddComponent } from "./components/patient/patient-add/patient-add.component";
import { ListPatientComponent } from './components/patient/list-patient/list-patient.component';

const APP_ROUTES: Routes = [
  { path: 'doctor', component: DoctorScheduleComponent },
  { path: 'add-doctor', component: AddDoctorComponent },
  { path: 'list-doctors', component: ListDoctorComponent },
  { path: 'patient-add', component: PatientAddComponent },
  { path: 'list-patients', component: ListPatientComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
