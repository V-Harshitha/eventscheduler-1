import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
// import { FormDataService } from '../form-data.service';
import { RegistrationService } from '../registration.service';
import { response } from 'express';
import { FormControl, FormGroup } from '@angular/forms';


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
  formSubmitted:string='';
  constructor(
    private router:Router,
    // private formData: FormDataService,
    private registrationService:RegistrationService){
      
  }
  registerForm = new FormGroup({
    username : new FormControl(""),
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    gender : new FormControl(""),
    password : new FormControl(""),
    email : new FormControl(""),
    phoneNumber : new FormControl("")
  });
    ngOnInit(){
    }
  //   onSubmit(){
  //     this.formData.username = this.username;
  //     this.formData.firstName = this.firstName;
  //     this.formData.lastName = this.lastName;
  //     this.formData.password = this.password;
  //     this.formData.email = this.email;
  //     this.formData.phoneNumber = this.phoneNumber;
  //     this.formData.gender = this.gender;
  //     this.router.navigate(['/success']);
  // }
  registerUser() { 
    console.log("register user enter. ")
    console.log("register data"+this.username,this.password,this.email) 
    this.registrationService.registerUser(this.username,this.firstName,this.lastName,this.password,this.email,this.phoneNumber,this.gender).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        console.log(this.registerForm.value);
        
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
    if (!this.isValidEmail(this.email)) {
      
      return;
    }
    if (!this.isValidPhoneNumber(this.phoneNumber)) {
    
      return;
    }
    //  if(this.registrationService.isUserExists(this.username)){
    //   // this.router.navigate(['/login']);
    //   alert('User Already exists');
    //   return;
    // }
    this.formSubmitted="Form Submitted Successfully";
    setTimeout(() =>{
    this.router.navigate(['/login']);
    },2000);
    console.log("register user exit. ") 
    // this.router.navigate(['/success']);
     
}
isValidEmail(email: string): boolean {
  // Use a regular expression for basic email format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
}
isValidPhoneNumber(phoneNumber: string): boolean {
  // Use a regular expression for basic 10-digit phone number validation
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}
}
