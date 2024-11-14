import { Pipe, PipeTransform } from '@angular/core';
import {Operator} from "./Shared/Modules/operator";

@Pipe({
  name: 'pipeBank',
  standalone: true
})
export class PipeBankPipe implements PipeTransform {

  transform(user:Operator): string {
    return `Use my email: ${user.email} to contact me.`;
  }

}
