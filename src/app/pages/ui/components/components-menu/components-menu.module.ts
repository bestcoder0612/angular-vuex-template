import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsMenuRoutingModule } from './components-menu-routing.module';
import { ComponentsMenuComponent } from './components-menu.component';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { ComponentsOverviewMenuModule } from '../components-overview/components/components-overview-menu/components-overview-menu.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ComponentsMenuComponent],
  imports: [
    CommonModule,
    ComponentsMenuRoutingModule,
    SecondaryToolbarModule,
    PageLayoutModule,
    ComponentsOverviewMenuModule,
    BreadcrumbsModule,
    ContainerModule
  ]
})
export class ComponentsMenuModule {
}
