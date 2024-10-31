import { Component, Input} from '@angular/core';
import { Operator } from '../Shared/Modules/operator';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-information-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-information-list.component.html',
  styleUrl: './user-information-list.component.css'
})
export class UserInformationListComponent {
  @Input() login?:Operator;
}
