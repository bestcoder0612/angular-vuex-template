import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewProgressComponent } from './components-overview-progress.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewProgressComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatTabsModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewProgressComponent]
})
export class ComponentsOverviewProgressModule {
}
