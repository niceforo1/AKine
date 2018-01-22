import { RouterModule, Routes } from '@angular/router';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import { HomeComponent } from './components/home/home.component';
/*PROFESSIONAL*/
import { AddDoctorComponent } from './components/doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent }  from './components/doctor/edit-doctor/edit-doctor.component';
import { ListDoctorComponent} from './components/doctor/list-doctor/list-doctor.component';

/*PATIENT*/
import { AddPatientComponent }  from './components/patient/add-patient/add-patient.component';
import { EditPatientComponent }  from './components/patient/edit-patient/edit-patient.component';
import { ListPatientComponent } from './components/patient/list-patient/list-patient.component';

const APP_ROUTES: Routes = [
  { path: 'doctor', component: DoctorScheduleComponent },
  { path: 'add-doctor', component: AddDoctorComponent },
  { path: 'edit-doctors', component: EditDoctorComponent },
  { path: 'list-doctors', component: ListDoctorComponent },
  { path: 'add-patient', component: AddPatientComponent },
  { path: 'edit-patient', component: EditPatientComponent },
  { path: 'list-patients', component: ListPatientComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
