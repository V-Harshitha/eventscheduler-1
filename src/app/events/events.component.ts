import { Component, HostListener, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:any[]=[]; 
  eventsPerPage:number=3; 
  // eventName:string='';
  // eventDate:string='';
  // eventLocation:string='';
  
  constructor(
    private router:Router,
    private eventData : EventDataService,
    ){
      // this.loadItems();
      // this.events = this.eventData.getJsonData();
      // this.eventName = eventData.eventName;
      // this.eventDate = eventData.eventDate;
      // this.eventLocation = eventData.eventLocation;
    }
    loadItems(){
      for(let i=0;i<this.eventsPerPage;i++){
       this.events.push(`events`);
    }
    }
    @HostListener('window:scroll',[])
    onScroll(){
   if(window.innerHeight+window.scrollY >= document.body.offsetHeight){
    this.loadItems();
   }
   }
    ngOnInit(): void{
      this.events=this.eventData.getJsonData();
    }

}
