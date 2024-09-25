import {NgForOf, NgIf} from '@angular/common';
import { Component, Input} from '@angular/core';
import { User } from '../Shared/Modules/user';
@Component({
  selector: 'app-user-information-list',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './user-information-list.component.html',
  styleUrl: './user-information-list.component.css'
})
export class UserInformationListComponent {
  @Input() users?:User;
}
