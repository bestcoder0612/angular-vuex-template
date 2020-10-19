import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewMenuComponent } from './components-overview-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [ComponentsOverviewMenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
    IconModule
  ],
  exports: [ComponentsOverviewMenuComponent]
})
export class ComponentsOverviewMenuModule {
}
