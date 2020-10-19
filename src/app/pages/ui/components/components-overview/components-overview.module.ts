import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsOverviewRoutingModule } from './components-overview-routing.module';
import { ComponentsOverviewComponent } from './components-overview.component';
import { MatListModule } from '@angular/material/list';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatRippleModule } from '@angular/material/core';
import { ComponentsOverviewAutocompleteModule } from './components/components-overview-autocomplete/components-overview-autocomplete.module';
import { ComponentsOverviewButtonsModule } from './components/components-overview-buttons/components-overview-buttons.module';
import { ComponentsOverviewCardsModule } from './components/components-overview-cards/components-overview-cards.module';
import { ComponentsOverviewCheckboxModule } from './components/components-overview-checkbox/components-overview-checkbox.module';
import { ComponentsOverviewDialogsModule } from './components/components-overview-dialogs/components-overview-dialogs.module';
import { ComponentsOverviewGridListModule } from './components/components-overview-grid-list/components-overview-grid-list.module';
import { ComponentsOverviewInputModule } from './components/components-overview-input/components-overview-input.module';
import { ComponentsOverviewListsModule } from './components/components-overview-lists/components-overview-lists.module';
import { ComponentsOverviewMenuModule } from './components/components-overview-menu/components-overview-menu.module';
import { ComponentsOverviewProgressModule } from './components/components-overview-progress/components-overview-progress.module';
import { ComponentsOverviewProgressSpinnerModule } from './components/components-overview-progress-spinner/components-overview-progress-spinner.module';
import { ComponentsOverviewRadioModule } from './components/components-overview-radio/components-overview-radio.module';
import { ComponentsOverviewSliderModule } from './components/components-overview-slider/components-overview-slider.module';
import { ComponentsOverviewSlideToggleModule } from './components/components-overview-slide-toggle/components-overview-slide-toggle.module';
import { ComponentsOverviewSnackBarModule } from './components/components-overview-snack-bar/components-overview-snack-bar.module';
import { ComponentsOverviewTooltipModule } from './components/components-overview-tooltip/components-overview-tooltip.module';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ComponentsOverviewComponent],
  imports: [
    CommonModule,
    ComponentsOverviewRoutingModule,
    MatListModule,
    PageLayoutModule,
    FlexLayoutModule,
    SecondaryToolbarModule,
    MatRippleModule,
    ComponentsOverviewAutocompleteModule,
    ComponentsOverviewButtonsModule,
    ComponentsOverviewCardsModule,
    ComponentsOverviewCheckboxModule,
    ComponentsOverviewDialogsModule,
    ComponentsOverviewGridListModule,
    ComponentsOverviewInputModule,
    ComponentsOverviewListsModule,
    ComponentsOverviewMenuModule,
    ComponentsOverviewProgressModule,
    ComponentsOverviewProgressSpinnerModule,
    ComponentsOverviewRadioModule,
    ComponentsOverviewSliderModule,
    ComponentsOverviewSlideToggleModule,
    ComponentsOverviewSnackBarModule,
    ComponentsOverviewTooltipModule,
    BreadcrumbsModule,
    ContainerModule
  ]
})
export class ComponentsOverviewModule {
}
