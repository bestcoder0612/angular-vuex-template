import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewSlideToggleComponent } from './components-overview-slide-toggle.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewSlideToggleComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewSlideToggleComponent]
})
export class ComponentsOverviewSlideToggleModule {
}
