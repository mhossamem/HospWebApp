import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule, MatTab } from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PatientslistComponent } from './components/patientslist/patientslist.component';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { GeneratetokenComponent } from './components/generatetoken/generatetoken.component';
import { ViewpatientdetailsComponent } from './components/viewpatientdetails/viewpatientdetails.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientService } from './services/patient.service';
import { GentokenService } from './services/gentoken.service';
import { UserService } from './services/user.service';
import { UpdatepatientComponent } from './components/updatepatient/updatepatient.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { HosplistService } from './services/hosplist.service';
import { AuthGuard } from './guards/auth.guard';
import { AddhospitalComponent } from './components/addhospital/addhospital.component';
import { NavbarService } from './services/navbar.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PatientslistComponent,
    AddpatientComponent,
    GeneratetokenComponent,
    ViewpatientdetailsComponent,
    NavbarComponent,
    UpdatepatientComponent,
    PageNotFoundComponent,
    UserpageComponent,
    UserslistComponent,
    UserUpdateComponent,
    AddhospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule

  ],
  providers: [PatientService,UserService,GentokenService,HosplistService,NavbarService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
