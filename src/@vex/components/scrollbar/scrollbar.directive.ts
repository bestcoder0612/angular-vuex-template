import { AfterContentInit, Directive, ElementRef, Input, NgZone } from '@angular/core';
import SimpleBar from 'simplebar';

@Directive({
  selector: '[vexScrollbar],vex-scrollbar',
  host: {
    class: 'vex-scrollbar'
  }
})
export class ScrollbarDirective implements AfterContentInit {

  @Input('vexScrollbar') options: Partial<any>;

  scrollbarRef: SimpleBar;

  constructor(private _element: ElementRef,
              private zone: NgZone) {
  }

  ngAfterContentInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new SimpleBar(this._element.nativeElement, this.options);
    });
  }
}
