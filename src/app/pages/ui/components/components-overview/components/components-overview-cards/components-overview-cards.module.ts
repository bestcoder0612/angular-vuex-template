import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewCardsComponent } from './components-overview-cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [ComponentsOverviewCardsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    HighlightModule,
    IconModule
  ],
  exports: [ComponentsOverviewCardsComponent]
})
export class ComponentsOverviewCardsModule {
}
