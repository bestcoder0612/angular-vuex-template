import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRadioRoutingModule } from './components-radio-routing.module';
import { ComponentsRadioComponent } from './components-radio.component';
import { ComponentsOverviewRadioModule } from '../components-overview/components/components-overview-radio/components-overview-radio.module';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ComponentsRadioComponent],
  imports: [
    CommonModule,
    ComponentsRadioRoutingModule,
    ComponentsOverviewRadioModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SecondaryToolbarModule,
    ContainerModule
  ]
})
export class ComponentsRadioModule {
}
