import { Pipe, PipeTransform } from '@angular/core';
import {Operator} from "../Shared/Modules/operator";

@Pipe({
  name: 'pipeBank',
  standalone: true
})
export class PipeBankPipe implements PipeTransform {

  transform(user:Operator): string {
    if(user.Admin){
      return `contacts: ${user.contacts}`;
    }else {
      return `No contact for non admin`;
    }
  }

}
