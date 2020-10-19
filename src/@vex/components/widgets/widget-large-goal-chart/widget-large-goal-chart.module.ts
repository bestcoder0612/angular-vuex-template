import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetLargeGoalChartComponent } from './widget-large-goal-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { ChartModule } from '../../chart/chart.module';
import { ColorFadeModule } from '../../../pipes/color/color-fade.module';


@NgModule({
  declarations: [WidgetLargeGoalChartComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    ChartModule,
    ColorFadeModule
  ],
  exports: [WidgetLargeGoalChartComponent]
})
export class WidgetLargeGoalChartModule {
}
