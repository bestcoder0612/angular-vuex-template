import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewSnackBarComponent } from './components-overview-snack-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [ComponentsOverviewSnackBarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [ComponentsOverviewSnackBarComponent]
})
export class ComponentsOverviewSnackBarModule {
}
