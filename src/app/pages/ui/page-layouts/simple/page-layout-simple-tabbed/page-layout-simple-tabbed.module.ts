import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutSimpleTabbedRoutingModule } from './page-layout-simple-tabbed-routing.module';
import { PageLayoutSimpleTabbedComponent } from './page-layout-simple-tabbed.component';
import { SecondaryToolbarModule } from '../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { MatTabsModule } from '@angular/material/tabs';
import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import { ContainerModule } from '../../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [PageLayoutSimpleTabbedComponent],
  imports: [
    CommonModule,
    PageLayoutSimpleTabbedRoutingModule,
    SecondaryToolbarModule,
    PageLayoutModule,
    MatTabsModule,
    PageLayoutDemoModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatButtonModule,
    IconModule,
    MatIconModule,
    ContainerModule,
  ]
})
export class PageLayoutSimpleTabbedModule {
}
