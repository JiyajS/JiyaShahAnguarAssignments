import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { Operator } from "../Shared/Modules/operator";
import { UserInformationListComponent } from "../user-information-list/user-information-list.component";
import { OnlineBankingService } from "../online-banking.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [
    NgForOf,
    UserInformationListComponent,
    RouterLink,
  ],
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class UserInformationComponent implements OnInit {
  fname: string = 'Jiya';
  lname: string = 'Shah';
  login: Operator[] = [];
  selectedUser?: Operator;

  constructor(
    private onlineBanking: OnlineBankingService,
    private router: Router // Use Router instead of RouterLink for dependency injection
  ) {}

  ngOnInit() {
    this.onlineBanking.getUser().subscribe({
      next: (data: Operator[]) => this.login = data,
      error: err => console.error("Error occurred. Wait for a second", err),
      complete: () => console.log("Data fetching complete")
    });
  }

  selectUser(user: Operator): void {
    this.selectedUser = user;
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/list-item`, id]); // Corrected to use the Router instance for navigation
  }
}
