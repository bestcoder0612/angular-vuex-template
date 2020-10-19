import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterFaqRoutingModule } from './help-center-faq-routing.module';
import { HelpCenterFaqComponent } from './help-center-faq.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [HelpCenterFaqComponent],
  imports: [
    CommonModule,
    HelpCenterFaqRoutingModule,
    MatExpansionModule
  ]
})
export class HelpCenterFaqModule {
}
