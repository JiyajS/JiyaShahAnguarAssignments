import { NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { User } from '../Shared/Modules/user';
@Component({
  selector: 'app-user-information-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-information-list.component.html',
  styleUrl: './user-information-list.component.css'
})
export class UserInformationListComponent {
  @Input() userList?:User;
}
