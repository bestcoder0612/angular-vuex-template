import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorFadePipe } from './color-fade.pipe';


@NgModule({
  declarations: [ColorFadePipe],
  imports: [
    CommonModule
  ],
  exports: [ColorFadePipe]
})
export class ColorFadeModule {
}
