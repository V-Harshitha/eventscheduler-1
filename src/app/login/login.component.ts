import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username: string = ''; 
  password: string = ''; 
  loginForm: FormGroup;
  loginMessage: string = '';
  user = { username: '', password: '' };


  constructor(private router: Router,private fb: FormBuilder,private authService:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required],Validators.minLength(4)], 
      password: ['', [Validators.required]]
    });
  }
  // constructor(private router: Router) {}


  
  
  onSubmit() {
    if (this.username === 'Harshitha' && this.password === '123') {
      this.loginMessage = 'Login Successful!';
      setTimeout(() => {
      this.router.navigate(['/home']);
      },2000);
    } else {
      this.loginMessage = 'Login failed. Please check your credentials.';
    }
  }
}




