import { Component, OnInit } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {DatePipe, JsonPipe, NgForOf, TitleCasePipe} from '@angular/common';
import { UserInformationComponent } from "./user-information/user-information.component";
import { OnlineBankingService } from "./online-banking.service";
import { Operator } from './Shared/Modules/operator';
import {Router,RouterModule} from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, UserInformationComponent, RouterLinkActive, RouterModule, TitleCasePipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'banking system';
  date = '2024-11-14'
  topUser?: Operator ; // Define a variable to store the user data

  constructor(private onlineBanking: OnlineBankingService, private router: Router) { }

  ngOnInit(): void {
    this.gettopUser();
  }
  gettopUser():void{
    const id =1;
    this.onlineBanking.getUserById(id).subscribe((opp) => {
      this.topUser = opp;
    })
  }
  // navigateToModifyItem(): void {
  //   this.router.navigate(['/modifyListItem']);
  // }
  // navigateToUserList(): void {
  //   console.log('Navigating to user list...');
  //   this.router.navigate(['/users']);
  // }

}
