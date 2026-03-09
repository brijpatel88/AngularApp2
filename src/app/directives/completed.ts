// src/app/directives/completed.ts

import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCompleted]',
  standalone: true
})
export class CompletedDirective implements OnChanges {

  //Receives completion status from component
  @Input() appCompleted = false;

  constructor(private el: ElementRef) {}

  // Applies a Style changes when task completion changes
  ngOnChanges() {
    if (this.appCompleted) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontWeight = '600';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}
