import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, NgForOf } from '@angular/common';
import { UserInformationComponent } from "./user-information/user-information.component";
import { OnlineBankingService } from "./online-banking.service";
import { Operator } from './Shared/Modules/operator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, UserInformationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Banking System';
  topUser: Operator | undefined;  // Define a variable to store the user data

  constructor(private onlineBanking: OnlineBankingService) { }

  ngOnInit(): void {
    // Call the service to get the user with ID 1
    this.onlineBanking.getUserById(1).subscribe((data: Operator | undefined) => {
      this.topUser = data;  // Store the retrieved user data
    });
  }
}
