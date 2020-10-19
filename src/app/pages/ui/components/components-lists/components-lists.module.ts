import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsListsRoutingModule } from './components-lists-routing.module';
import { ComponentsListsComponent } from './components-lists.component';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { ComponentsOverviewListsModule } from '../components-overview/components/components-overview-lists/components-overview-lists.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ComponentsListsComponent],
  imports: [
    CommonModule,
    ComponentsListsRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    SecondaryToolbarModule,
    ComponentsOverviewListsModule,
    ContainerModule
  ]
})
export class ComponentsListsModule {
}
