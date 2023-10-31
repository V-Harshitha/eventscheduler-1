import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormDataService } from '../form-data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  
  

  username: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  email: string = '';
  phoneNumber: string = '';
  gender: string= '';
  

  constructor(
    private router:Router,
    private formData: FormDataService){
      
  }
    ngOnInit(){
    }
    onSubmit(){
      this.formData.username = this.username;
      this.formData.firstName = this.firstName;
      this.formData.lastName = this.lastName;
      this.formData.password = this.password;
      this.formData.email = this.email;
      this.formData.phoneNumber = this.phoneNumber;
      this.formData.gender = this.gender;
      this.router.navigate(['/success']);
  }
}
