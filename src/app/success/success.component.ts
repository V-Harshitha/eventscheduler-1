import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  email: string = '';
  phoneNumber: string = '';
  gender: string= '';
  
  
  constructor(
    private formData : FormDataService,
    ){
    
       this.username = formData.username;
       this.firstName = formData.firstName;
       this.lastName = formData.lastName;
       this.password = formData.password;
       this.email = formData.email;
       this.phoneNumber = formData.phoneNumber;
       this.gender = formData.gender;
      
  }
  ngOnInit(){
  }
}
