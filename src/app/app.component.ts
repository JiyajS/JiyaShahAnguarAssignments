import { Component, OnInit } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import { JsonPipe, NgForOf } from '@angular/common';
import { UserInformationComponent } from "./user-information/user-information.component";
import { OnlineBankingService } from "./online-banking.service";
import { Operator } from './Shared/Modules/operator';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, UserInformationComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Banking System';
  topUser: Operator | undefined;  // Define a variable to store the user data

  constructor(private onlineBanking: OnlineBankingService, private router: Router) { }

  ngOnInit(): void {
    // Call the service to get the user with ID 1
    this.onlineBanking.getUserById(1).subscribe((data: Operator | undefined) => {
      this.topUser = data;  // Store the retrieved user data
    });
  }
  navigateToModifyItem(): void {
    this.router.navigate(['/modifyListItem']);
  }

}
