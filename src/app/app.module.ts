import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InviteGuestsComponent } from './invite-guests/invite-guests.component';
import { CustomizeEventComponent } from './customize-event/customize-event.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SignupComponent } from './signup/signup.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { EditEventDialogComponent } from './edit-event-dialog/edit-event-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'',redirectTo:'/getstarted',pathMatch:'full'},
  {path:'events',component:EventsComponent},
  {path:'cal',component:CalendarComponent},
  {path:'form',component:FormComponent},
  {path:'home',component:HomeComponent},
  {path:'success',component:SuccessComponent},
  {path:'login',component:LoginComponent},
  {path:'inviteguest',component:InviteGuestsComponent},
  {path:'customize',component:CustomizeEventComponent},
  {path:'event-calendar',component:EventCalendarComponent},
  {path:'product',component:DashboardComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'getstarted',component:GetstartedComponent},
  {path:'details',component:DetailsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    DashboardComponent,
    EventsComponent,
    FormComponent,
    SuccessComponent,
    LoginComponent,
    InviteGuestsComponent,
    CustomizeEventComponent,
    EventCalendarComponent,
    SignupComponent,
    EventDialogComponent,
    EditEventDialogComponent,
    ForgotPasswordComponent,
    GetstartedComponent,
    DetailsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    FullCalendarModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
