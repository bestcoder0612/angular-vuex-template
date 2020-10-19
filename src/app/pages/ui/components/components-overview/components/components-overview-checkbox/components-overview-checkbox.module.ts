import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewCheckboxComponent } from './components-overview-checkbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewCheckboxComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatTabsModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewCheckboxComponent]
})
export class ComponentsOverviewCheckboxModule {
}
