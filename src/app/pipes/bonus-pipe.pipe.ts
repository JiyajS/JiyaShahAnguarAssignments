import { Pipe, PipeTransform } from '@angular/core';
import {Operator} from "../Shared/Modules/operator";
import {colors} from "@angular/cli/src/utilities/color";

@Pipe({
  name: 'bonusPipe',
  standalone: true
})
export class BonusPipePipe implements PipeTransform {

  transform(bonus:Operator): string {
    if(!bonus.Admin){
      return  'red';
    }else{
      return 'green';
    }
  }

}
