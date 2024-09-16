import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Modules/user';
import {JsonPipe,NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe,NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jiya_shahAnguarAssignments';
  fname: string = 'Jiya';
  lname: string ='Shah';

  user1: User = {id:1,name:'Jiya Shah',email:'jiyajshah25@gmail.com',contacts:265546545,city:'windsor'};

}
