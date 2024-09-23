import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {User} from "../Shared/Modules/user";

@Component({
  selector: 'app-user-information',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})
export class UserInformationComponent {





}
