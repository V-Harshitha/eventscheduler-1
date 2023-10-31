import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameDataService {
    
  userName: string = 'BLANK';
  country:string ='';
  selectedColor:string='';
 
  
  constructor() { }

}
