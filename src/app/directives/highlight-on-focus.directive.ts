import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective implements AfterContentInit{
    @Input() appHighLightOnFocus = '';
  constructor(private el: ElementRef) { }

  ngAfterContentInit(): void {
    this.el.nativeElement.focus();
  }

}
