import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewDialogsComponent, DemoDialogComponent } from './components-overview-dialogs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [ComponentsOverviewDialogsComponent, DemoDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    HighlightModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    IconModule
  ],
  exports: [ComponentsOverviewDialogsComponent],
  entryComponents: [DemoDialogComponent]
})
export class ComponentsOverviewDialogsModule {
}
