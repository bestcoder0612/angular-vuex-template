import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterPricingRoutingModule } from './help-center-pricing-routing.module';
import { HelpCenterPricingComponent } from './help-center-pricing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [HelpCenterPricingComponent],
  exports: [
    HelpCenterPricingComponent
  ],
  imports: [
    CommonModule,
    HelpCenterPricingRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule
  ]
})
export class HelpCenterPricingModule {
}
