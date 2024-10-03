import { Component,OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Operator} from "../Shared/Modules/operator";
import {UserInformationListComponent} from "../user-information-list/user-information-list.component";
import {operate} from "rxjs/internal/util/lift";
import {OnlineBankingService} from "../online-banking.service";


@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [
    NgForOf,
    UserInformationListComponent
  ],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})
export class UserInformationComponent implements OnInit{
  fname: string = 'Jiya';
  lname: string ='Shah';

  login: Operator[] = [];
constructor(private OnlineBanking : OnlineBankingService ) {
}
ngOnInit(){
  this.OnlineBanking.getUser().subscribe({
    next: (data: Operator[]) =>  this.login = data,
      error:err => console.error("Error occurred. Wait for a second", err),
      complete:() => console.log("Error Solved")
  })
}
selectedUser?: Operator;

selectUser(user: Operator):void {
  this.selectedUser = user;
}

  protected readonly operate = operate;
}
