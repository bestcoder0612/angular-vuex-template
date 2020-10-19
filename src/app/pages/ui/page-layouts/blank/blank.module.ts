import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [BlankComponent],
  imports: [
    CommonModule,
    BlankRoutingModule,
    SecondaryToolbarModule,
    ContainerModule
  ]
})
export class BlankModule {
}
