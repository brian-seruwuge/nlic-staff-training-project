import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { TrainingComponent } from './training/training.component';
import { SessionComponent } from './session/session.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddStaffComponent } from './add-staff/add-staff.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { TrainingService } from './services/training.service';




const appRoutes: Routes=[
  {path:'', component: StaffComponent},
  {path:'training', component:TrainingComponent},
  {path:'session', component: SessionComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    TrainingComponent,
    SessionComponent,
    AddStaffComponent,
    EditStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent],
  entryComponents:[AddStaffComponent, EditStaffComponent]
})
export class AppModule { }
