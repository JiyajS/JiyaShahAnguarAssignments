import { Component, OnInit } from '@angular/core';
import {NgForOf, UpperCasePipe} from "@angular/common";
import { Operator } from "../Shared/Modules/operator";
import { UserInformationListComponent } from "../user-information-list/user-information-list.component";
import {Router, RouterLink} from "@angular/router";
import {OnlineBankingService} from "../services/online-banking.service";
import {login} from "../Shared/userChanges.data";
import {PipeBankPipe} from "../pipes/pipe-bank.pipe";
import {BonusPipePipe} from "../pipes/bonus-pipe.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {ShowDetailsOnHoverDirective} from "../directives/show-details-on-hover.directive";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [
    NgForOf,
    UserInformationListComponent,
    RouterLink,
    UpperCasePipe,
    PipeBankPipe,
    BonusPipePipe,
    HoverHighlightDirective,
    ShowDetailsOnHoverDirective,
    MatCardModule,
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
getUser():void{
    this.onlineBanking.getUser().subscribe((login)=>{
      this.login = login;
    })
}
  navigateToEditUser(): void {
    this.router.navigate(['/modifyListItem']);
  }

  onDelete(id:number):void{
    this.onlineBanking.deleteUser(id)
    this.login = this.login.filter(user => user.id !== id);
  }
  // onEdit(id: number | undefined): void {
  //   this.router.navigate(['/modifyListItem', id]);
  // }

  onEdit(id: number): void {
    this.router.navigate(['/modifyListItem', id]);
  }


}
