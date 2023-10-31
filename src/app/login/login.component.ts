import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username: string = ''; 
  password: string = ''; 
  loginForm: FormGroup;


  constructor(private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required],Validators.minLength(4)], 
      password: ['', [Validators.required]]
    });
  }
  // constructor(private router: Router) {}


  
  onSubmit() {

    if (this.username === 'Harshitha' && this.password === '123') {
    this.router.navigate(['/home']);
    alert('Login successful');
    }else{
      alert('Login failed');
    }
  }
}




