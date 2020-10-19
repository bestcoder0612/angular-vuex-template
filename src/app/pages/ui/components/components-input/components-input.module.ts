import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsInputRoutingModule } from './components-input-routing.module';
import { ComponentsInputComponent } from './components-input.component';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ComponentsOverviewInputModule } from '../components-overview/components/components-overview-input/components-overview-input.module';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ComponentsInputComponent],
  imports: [
    CommonModule,
    ComponentsInputRoutingModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    ComponentsOverviewInputModule,
    PageLayoutModule,
    ContainerModule
  ]
})
export class ComponentsInputModule {
}
