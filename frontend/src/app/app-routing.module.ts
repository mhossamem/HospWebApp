import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PatientslistComponent } from './components/patientslist/patientslist.component';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { GeneratetokenComponent } from './components/generatetoken/generatetoken.component';
import { ViewpatientdetailsComponent } from './components/viewpatientdetails/viewpatientdetails.component';
import { UpdatepatientComponent } from './components/updatepatient/updatepatient.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { AddhospitalComponent } from './components/addhospital/addhospital.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{path: 'register/:token', component:RegisterComponent},
                        {path: 'viewdetails/:id',component:ViewpatientdetailsComponent, canActivate:[AuthGuard]},
                        {path: 'list', component:PatientslistComponent, canActivate:[AuthGuard]},
                        {path: 'update/:id',component:UpdatepatientComponent, canActivate:[AuthGuard]},
                        {path: '', redirectTo: 'login', pathMatch:'full'},
                        {path: 'add', component:AddpatientComponent, canActivate:[AuthGuard]},
                        {path: 'gentoken', component: GeneratetokenComponent, canActivate:[AuthGuard]},
                        {path: 'login', component:LoginComponent},
                        {path: 'userlist', component:UserslistComponent, canActivate:[AuthGuard]},
                        {path: 'accountupdate', component:UserUpdateComponent, canActivate:[AuthGuard]},
                        {path: 'account', component:UserpageComponent, canActivate:[AuthGuard]},
                        {path: 'hospital',component:AddhospitalComponent, canActivate:[AuthGuard]},
                        {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
