import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsFaRoutingModule } from './icons-fa-routing.module';
import { IconsFaComponent } from './icons-fa.component';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [IconsFaComponent],
  imports: [
    CommonModule,
    IconsFaRoutingModule,
    IconModule,
    FlexLayoutModule,
    ScrollingModule
  ]
})
export class IconsFaModule {
}
