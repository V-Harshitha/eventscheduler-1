import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customize-event',
  templateUrl: './customize-event.component.html',
  styleUrls: ['./customize-event.component.css']
})
export class CustomizeEventComponent implements OnInit {
  eventName: string = '';
  eventDate: string = '';
  eventLocation: string = '';
  dateInPast: boolean = false;
  eventAddedMessage:String='';

  eventList: any[]=[];

  constructor(
    private router:Router,
    private eventData:EventDataService){
      this.eventList=this.eventData.getAllEvents();
  }
  navigateToCalendar(){
    const events = this.eventData.getAllEvents();
    this.router.navigate(['/event-calendar'],{state:{events}});
  }
  checkEventDate() {
    const selectedDate = new Date(this.eventDate);
    const currentDate = new Date();
    this.dateInPast = selectedDate < currentDate;
  }

  ngOnInit(): void {}
  addEvent() {
    if (this.eventName && this.eventDate && this.eventLocation) {
      const event = {
        title: this.eventName,
        start: this.eventDate,
        end: this.eventDate,
        location: this.eventLocation,
        eventName:this.eventName,
        eventDate:this.eventDate,
        eventLocation:this.eventLocation,
        
      };
      this.eventData.addEvent(event);
      this.eventAddedMessage='Event Added Successfully';
      setTimeout(()=>{
        this.eventAddedMessage='';
      },5000);
      this.eventName = '';
      this.eventDate = '';
      this.eventLocation = '';
    } else {
      alert('Please fill all Event Details');
    }
   
  }
  

  
  getAllEvents(){
    this.router.navigate(['/events']);
  }

  
  // addEvent(){
  //   if(this.eventName && this.eventDate && this.eventLocation){
  //     this.eventData.addEvent({
  //       eventName:this.eventName,
  //       eventDate:this.eventDate,
  //       eventLocation:this.eventLocation,
  //     });
  //     this.eventName='';
  //     this.eventDate='';
  //     this.eventLocation='';
  //   }else{
  //     alert('Please fill all Event Details')
  //   }
  // }



  // submitCustomization(){
  //   this.eventData.eventName = this.eventName;
  //   this.eventData.eventDate = this.eventDate;
  //   this.eventData.eventLocation = this.eventLocation;
  //   this.router.navigate(['/events'])
  // }

}
