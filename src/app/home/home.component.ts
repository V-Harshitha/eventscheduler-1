import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameDataService } from '../name-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  userName:string='';
  country:string='';
  selectedColor:string='';
  
  events: {
    eventName: string;
    eventDate: string;
    eventLocation: string;
  }[] = [];

  constructor(
    private router:Router,
    private nameData:NameDataService,private snackBar: MatSnackBar){
      
  }
    ngOnInit(){
    }
    submitText(){
      this.nameData.userName = this.userName;
      this.nameData.country = this.country;
      this.nameData.selectedColor = this.selectedColor;
      this.router.navigate(['/product'])
    }  
  timerValue: number=1000;
  timerInterval:any;
  @HostListener('document:mousemove',['$event'])
  @HostListener('document:keydown',['$event'])
  onActivity(event:Event){
    this.resetTimer();
    this.startTimer();
  }

  startTimer(){
    this.timerInterval = setInterval(()=>{
      if(this.timerValue > 0){
        this.timerValue--;
        if(this.timerValue == 4){
          alert('Your session is going to expire');
        }
      }else{
        clearInterval(this.timerInterval);
        this.router.navigate(['/login']);
      }
    },1000);
  }
 
  resetTimer(){
    clearInterval(this.timerInterval);
    this.timerValue=1000;
  }
}
