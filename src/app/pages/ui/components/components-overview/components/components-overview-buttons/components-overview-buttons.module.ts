import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewButtonsComponent } from './components-overview-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { IconModule } from '@visurel/iconify-angular';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewButtonsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    IconModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewButtonsComponent]
})
export class ComponentsOverviewButtonsModule {
}
