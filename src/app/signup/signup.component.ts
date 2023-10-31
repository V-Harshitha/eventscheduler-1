import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData: any = {
    username: '',
    email: '',
    password: ''
  };

  signup() {
    alert('Sign up form submitted:');
    // console.log('Sign up form submitted:', this.userData);
  }


}
