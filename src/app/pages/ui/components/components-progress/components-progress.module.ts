import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsProgressRoutingModule } from './components-progress-routing.module';
import { ComponentsProgressComponent } from './components-progress.component';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ComponentsOverviewProgressModule } from '../components-overview/components/components-overview-progress/components-overview-progress.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ComponentsProgressComponent],
  imports: [
    CommonModule,
    ComponentsProgressRoutingModule,
    SecondaryToolbarModule,
    PageLayoutModule,
    BreadcrumbsModule,
    ComponentsOverviewProgressModule,
    ContainerModule
  ]
})
export class ComponentsProgressModule {
}
