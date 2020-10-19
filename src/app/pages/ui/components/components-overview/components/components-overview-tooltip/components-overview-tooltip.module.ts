import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewTooltipComponent } from './components-overview-tooltip.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [ComponentsOverviewTooltipComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    HighlightModule,
    MatTooltipModule,
    IconModule
  ],
  exports: [ComponentsOverviewTooltipComponent]
})
export class ComponentsOverviewTooltipModule {
}
