import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  email:String='';

  ngOnInit(): void {
   
  }
  onSubmit(){
    alert('Password reset email sent! Check your inbox.');
  }

}
