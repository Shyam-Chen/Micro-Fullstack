import { Directive, ElementRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Directive({ selector: '[elEvt]' })
export class EvtDirective implements AfterViewInit {
  @Input('elEvt') elEvt: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const key = Object.keys(this.elEvt)[0];
    this.el.nativeElement.$on(key, this.elEvt[key]);
  }
}
