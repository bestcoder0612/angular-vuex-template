import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutCardLargeHeaderTabbedRoutingModule } from './page-layout-card-large-header-tabbed-routing.module';
import { PageLayoutCardLargeHeaderTabbedComponent } from './page-layout-card-large-header-tabbed.component';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [PageLayoutCardLargeHeaderTabbedComponent],
  imports: [
    CommonModule,
    PageLayoutCardLargeHeaderTabbedRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    PageLayoutDemoModule,
    MatTabsModule,
    FlexLayoutModule,
    ContainerModule
  ]
})
export class PageLayoutCardLargeHeaderTabbedModule {
}
