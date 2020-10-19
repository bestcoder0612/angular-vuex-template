import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewButtonGroupComponent } from './components-overview-button-group.component';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [ComponentsOverviewButtonGroupComponent],
  imports: [
    CommonModule,
    HighlightModule,
    MatTabsModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [ComponentsOverviewButtonGroupComponent]
})
export class ComponentsOverviewButtonGroupModule {
}
