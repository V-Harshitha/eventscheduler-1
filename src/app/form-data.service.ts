import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  email: string = '';
  phoneNumber: string = '';
  gender: string='';
  constructor() { }
}
