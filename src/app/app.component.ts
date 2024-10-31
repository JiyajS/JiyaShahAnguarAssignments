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
export class AppComponent  {
  title = 'Banking System';

}
