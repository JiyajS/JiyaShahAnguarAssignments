import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Modules/user';
import {JsonPipe,NgForOf} from '@angular/common';
import {UserInformationComponent} from "./user-information/user-information.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe,NgForOf,UserInformationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Generation';

  // fname: string = 'Jiya';
  // lname: string ='Shah';
  //
  // users: User[] = [
  //   { id: 1, name: 'Jiya Shah', email: 'jiyajshah25@gmail.com', contacts: 456456, Admin:true },
  //   { id: 2, name: 'Javal Patel', email: 'javalptl@gmail.com', contacts: 54645, Admin: true },
  //   { id: 3, name: 'Manasvi Patel', email: 'm@gmail.com', contacts: 123123, Admin: false },
  //   { id: 4, name: 'Sakshi', email: 's@gmail.com', contacts: 5645484, Admin:false },
  //   { id: 5, name: 'Parimal', email: 'p@gmail.com', contacts: 8528787, Admin:false },
  //   { id: 6, name: 'Chaula', email: 'c@gmail.com', contacts: 6565466, Admin:true }
  // ];
  //
  // Login(user:User):void {
  //   user.Admin = !user.Admin;
  // }


}
