import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { CustomizeEventComponent } from './customize-event/customize-event.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { InviteGuestsComponent } from './invite-guests/invite-guests.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  // {path:'home',loadChildren:()=>import('./home/home.module')
  //     .then(data => data.HomeModule)},

  //  {path:'events',loadChildren:()=>import('./events/events.module').then(data => data.EventsModule)},
  // {path:'',redirectTo: '/home', pathMatch:'full'},

  {path:'',redirectTo:'/getstarted',pathMatch:'full'},
  {path:'create',component:EventsComponent},
  {path:'cal',component:CalendarComponent},
  {path:'form',component:FormComponent},
  {path:'success',component:SuccessComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'inviteguest',component:InviteGuestsComponent},
  {path:'customize',component:CustomizeEventComponent},
  {path:'event-calendar',component:EventCalendarComponent},
  {path:'product',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
