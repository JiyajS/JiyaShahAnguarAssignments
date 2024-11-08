import {NgForOf, NgIf} from '@angular/common';
import { Component, Input} from '@angular/core';
import { Operator } from '../Shared/Modules/operator';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-user-information-list',
  standalone: true,
  imports: [NgIf, NgForOf,NgOptimizedImage],
  templateUrl: './user-information-list.component.html',
  styleUrl: './user-information-list.component.css'
})
export class UserInformationListComponent {
  @Input() login?:Operator;
  @Input() OnEdit?:(id: number) => void;
  @Input() OnDelete?: (id: number) => void;
}
