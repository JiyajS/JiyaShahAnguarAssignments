import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appShowDetailsOnHover]',
  standalone: true
})
export class ShowDetailsOnHoverDirective {
  @Input() appShowDetailsOnHover = '';
  constructor(private el : ElementRef) { }

}
