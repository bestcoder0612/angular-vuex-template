import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutSimpleLargeHeaderTabbedRoutingModule } from './page-layout-simple-large-header-tabbed-routing.module';
import { PageLayoutSimpleLargeHeaderTabbedComponent } from './page-layout-simple-large-header-tabbed.component';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerModule } from '../../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [PageLayoutSimpleLargeHeaderTabbedComponent],
  imports: [
    CommonModule,
    PageLayoutSimpleLargeHeaderTabbedRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    PageLayoutDemoModule,
    MatTabsModule,
    FlexLayoutModule,
    ContainerModule
  ]
})
export class PageLayoutSimpleLargeHeaderTabbedModule {
}
