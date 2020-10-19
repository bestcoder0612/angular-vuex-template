import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';


@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule,
    ColorFadeModule
  ]
})
export class PricingModule {
}
