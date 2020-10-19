import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetQuickLineChartComponent } from './widget-quick-line-chart.component';
import { ChartModule } from '../../chart/chart.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { ShareBottomSheetModule } from '../../share-bottom-sheet/share-bottom-sheet.module';
import { MatButtonModule } from '@angular/material/button';
import { ColorFadeModule } from '../../../pipes/color/color-fade.module';


@NgModule({
  declarations: [WidgetQuickLineChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatIconModule,
    FlexLayoutModule,
    IconModule,
    ShareBottomSheetModule,
    MatButtonModule,
    ColorFadeModule
  ],
  exports: [WidgetQuickLineChartComponent]
})
export class WidgetQuickLineChartModule {
}

