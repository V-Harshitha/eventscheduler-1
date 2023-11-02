import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  private events: any[] = [{
    'eventName': 'Webinar',
    'eventDate': 'Sep 10',
    'eventLocation': 'Online',
    'is_available':'true'
  },
  {
    'eventName': 'Training',
    'eventDate': 'Sep 12',
    'eventLocation': 'Online',
    'is_available':'false'
  },
  {
    'eventName': 'Meeting',
    'eventDate': 'Sep 13',
    'eventLocation': 'Offline',
    'is_available':'true'
  }];
  // events:any[]=[];
  // private events: any[] = [];
  eventName:string='';
  eventDate:string='';
  eventLocation:string='';

  constructor() {
    
  }
  getJsonData(): any[] {
    return this.events;
  }

  addEvent(event: any) {
    event.id = this.generateUniqueId();
    this.events.push(event);
  }


  getAllEvents() {
    return this.events;
  }
 

  // updateEvent(event: any) {
  //   const index = this.events.findIndex((e) => e.id === event.id);
  //   if (index !== -1) {
  //     this.events[index] = event;
  //   }
  // }

  private generateUniqueId(): number{
    return this.events.length+1;
  }
  deleteEvent(event: any) {
    const index = this.events.findIndex((e) => e === event);
    if (index !== -1) {
      this.events.splice(index, 1);
    }
  }
}
