import { Inject, Injectable, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

export enum Style {
  light = 'vex-style-light',
  default = 'vex-style-default',
  dark = 'vex-style-dark'
}

@Injectable({
  providedIn: 'root'
})
export class StyleService implements OnDestroy {

  defaultStyle = Style.default;

  private _styleSubject = new BehaviorSubject<Style>(this.defaultStyle);
  style$ = this._styleSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.style$.pipe(untilDestroyed(this)).subscribe(style => this._updateStyle(style));
  }

  setStyle(style: Style) {
    this._styleSubject.next(style);
  }

  ngOnDestroy(): void {}

  private _updateStyle(style: Style) {
    const body = this.document.body;

    Object.values(Style).filter(s => s !== style).forEach(value => {
      if (body.classList.contains(value)) {
        body.classList.remove(value);
      }
    });

    body.classList.add(style);
  }
}
