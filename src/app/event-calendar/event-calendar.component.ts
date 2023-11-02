
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventDataService } from '../event-data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditEventDialogComponent } from '../edit-event-dialog/edit-event-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css'],
})
export class EventCalendarComponent implements AfterViewInit {
  eventName: string = '';
  eventDate: string = '';
  eventLocation: string = '';
  newEventTitle: string = '';
  newEventDate: string = '';
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  
  events: any[]=[];

  calendarOptions = {
    plugins: [dayGridPlugin],
    defaultView: 'dayGridMonth',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    editable: true,
    eventStartEditable: true,
    eventDurationEditable: true,
    selectable: true,
    eventTextColor: 'white',
    eventColor: 'blue',
    themeSystem: 'bootstrap',
    // events: [],
    events: this.eventData.getAllEvents().map((event) => {
      return {
        title: `${event.eventName} - ${event.eventLocation}`,
        start: event.eventDate,
        end: event.eventDate,
        location: event.eventLocation,
        // Include any other event properties you need
      };
    }), 
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(private dialog: MatDialog, 
    private eventData: EventDataService,
    private route:ActivatedRoute) {}
  
  handleEventClick(info: any) {
    const clickedEvent = info.event;
    console.log('Clicked Event:', clickedEvent);
    this. openEventDetailsModal(clickedEvent);
  }
 
  // openEditEventDialog(info: any) {
  //   // const clickedEvent = info.event;
  //   const dialogRef = this.dialog.open(EditEventDialogComponent, {
  //     width: '400px',
  //     data: { event:info.event },
  //   });

  //   dialogRef.afterClosed().subscribe((editedEvent) => {
  //     if (editedEvent) {
  //       // Update the edited event in your data service or calendar
  //       console.log('Edited Event:', editedEvent);
  //     }
  //   });
  // }
  openEventDetailsModal(event: any) {
    const dialogRef = this.dialog.open(EditEventDialogComponent, {
      width: '400px',
      data: event, // Pass the event data to the modal
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'event-deleted') {
        // Implement event deletion logic here
      } else if (result === 'event-updated') {
        // Implement event update logic here
      } else if (result === 'add-reminder') {
        // Implement reminder addition logic here
      }
    });
  }
  
  updateCalendarEventSource(events: any[]) {
    this.calendarComponent.getApi().refetchEvents();
    this.calendarComponent.getApi().addEventSource({ events });
  }
  

  addEvent() {
    if (this.eventName && this.eventDate && this.eventLocation) {
      const event = {
        title:`${this.eventName} - ${this.eventLocation}`,
        start: this.eventDate,
        end: this.eventDate,
        location: this.eventLocation,
      };

      this.eventData.addEvent(event);
      this.eventName = '';
      this.eventDate = '';
      this.eventLocation = '';
    } else {
      alert('Please fill all Event Details');
    }
  }

  ngAfterViewInit() {
    this.loadEvents();
    this.calendarComponent.getApi();
    this.calendarOptions.events = this.eventData.getAllEvents().map((event) => {
      return {
        title: `${event.eventName} - ${event.eventLocation}`,
        start: event.eventDate,
        end: event.eventDate,
        location: event.eventLocation,
        // Include any other event properties you need
      };
    });
  }


  loadEvents() {
    const events = this.eventData.getAllEvents();
    this.calendarComponent.getApi().addEventSource({
      events: events,
    });
  }
  
 
 
}