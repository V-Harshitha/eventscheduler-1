import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({   providedIn: 'root', })
export class RegistrationService {   
  // username: string = '';
  // firstName: string = '';
  // lastName: string = '';
  // password: string = '';
  // email: string = '';
  // phoneNumber: string = '';
  // gender: string= '';
  constructor(private http: HttpClient) {}  
   registerUser(username: string,firstName:string,lastName:string, password: string,email:string,phoneNumber:string,gender:string):Observable<any> {  
    const registartion_data={
      username:username,
      firstName:firstName,
      lastName:lastName,
      password:password,
      email:email,
      phoneNumber:phoneNumber,
      gender:gender
    }
      return this.http.post(`http://localhost:3000/register`,registartion_data);
    
    }
    
    // isUserExists(username: string): Observable<boolean>{
    //   return this.http.get<boolean>(`http://localhost:3000/register`)
    // }

    
}
