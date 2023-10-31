import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [

  {path:'',component:EventsComponent} 

  // {path:'',redirectTo:'/login',pathMatch:'full'},
  // {path:'create',component:EventsComponent},
  // {path:'cal',component:CalendarComponent},
  // {path:'form',component:FormComponent},
  // {path:'success',component:SuccessComponent},
  // {path:'login',component:LoginComponent},
  // {path:'home',component:HomeComponent},
  // {path:'inviteguest',component:InviteGuestsComponent},
  // {path:'customize',component:CustomizeEventComponent},
  // {path:'event-calendar',component:EventCalendarComponent},
  // {path:'product',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
