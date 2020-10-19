import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewInputComponent } from './components-overview-input.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [ComponentsOverviewInputComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
    IconModule
  ],
  exports: [ComponentsOverviewInputComponent]
})
export class ComponentsOverviewInputModule {
}
