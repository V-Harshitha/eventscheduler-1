import { Component } from '@angular/core';
import { NameDataService } from '../name-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: string ='';
  country:string='';
  selectedColor:string='';
  constructor(private nameData: NameDataService){
    this.userName = nameData.userName;
    this.country = nameData.country;
    this.selectedColor = nameData.selectedColor;
  }

}
