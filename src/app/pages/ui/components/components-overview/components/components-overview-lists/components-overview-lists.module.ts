import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewListsComponent } from './components-overview-lists.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';


@NgModule({
  declarations: [ComponentsOverviewListsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatTabsModule,
    HighlightModule
  ],
  exports: [ComponentsOverviewListsComponent]
})
export class ComponentsOverviewListsModule {
}
