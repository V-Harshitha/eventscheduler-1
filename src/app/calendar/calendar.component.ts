import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  newEventTitle: string = '';
  currentDate: Date;
  calendar: (Date | null)[][]; 
  events: { date: Date, title: string }[] = [];
  selectedDate: Date | null = null; 
  dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {
    this.currentDate = new Date(); 
    this.calendar = [[]]; 
    this.generateCalendar(this.currentDate);
  }

  ngOnInit() {
    // You can add further initialization logic here
  }

  getEventsForDate(date: Date | null): { date: Date, title: string }[] {
    if (date === null) return [];
    return this.events.filter(event => event.date.toDateString() === date.toDateString());
  }

  generateCalendar(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
  
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
  
    const calendarMatrix: (Date | null)[][] = [];
    let currentWeek: (Date | null)[] = [];
  
    
    for (let i = 0; i < firstDay.getDay(); i++) {
      currentWeek.push(null);
    }
  
   
    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push(new Date(year, month, day));
  
     
      if (currentWeek.length === 7) {
        calendarMatrix.push(currentWeek);
        currentWeek = [];
      }
    }
  
   
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
  
    calendarMatrix.push(currentWeek);
  
    this.calendar = calendarMatrix;
  }
  

  updateCalendar(direction: 'prev' | 'next') {
    const newDate = new Date(this.currentDate);
  
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
  
    this.generateCalendar(newDate);
    this.currentDate = newDate;
  }
  

  toggleEventInput(date: Date | null) {
    this.selectedDate = date === this.selectedDate ? null : date;
    this.newEventTitle = ''; // Clear the input field
  }

  addEvent(date: Date | null, title: string) {
    if (date !== null) {
      this.events.push({ date, title });
      this.newEventTitle = ''; // Clear the input field
    }
  }
}
