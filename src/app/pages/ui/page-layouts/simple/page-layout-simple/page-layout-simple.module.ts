import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutSimpleRoutingModule } from './page-layout-simple-routing.module';
import { PageLayoutSimpleComponent } from './page-layout-simple.component';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { PageLayoutDemoModule } from '../../page-layout-demo/page-layout-demo.module';
import { SecondaryToolbarModule } from '../../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import { ContainerModule } from '../../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [PageLayoutSimpleComponent],
  imports: [
    CommonModule,
    PageLayoutSimpleRoutingModule,
    PageLayoutModule,
    PageLayoutDemoModule,
    SecondaryToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    IconModule,
    MatIconModule,
    ContainerModule
  ]
})
export class PageLayoutSimpleModule {
}
