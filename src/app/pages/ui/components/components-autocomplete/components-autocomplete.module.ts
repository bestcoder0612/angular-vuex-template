import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsAutocompleteRoutingModule } from './components-autocomplete-routing.module';
import { ComponentsAutocompleteComponent } from './components-autocomplete.component';
import { ComponentsOverviewAutocompleteModule } from '../components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ComponentsAutocompleteComponent],
  imports: [
    CommonModule,
    ComponentsAutocompleteRoutingModule,
    ComponentsOverviewAutocompleteModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    PageLayoutModule,
    FlexLayoutModule,
    IconModule,
    ContainerModule
  ]
})
export class ComponentsAutocompleteModule {
}
