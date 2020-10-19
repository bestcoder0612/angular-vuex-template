import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardRoutingModule } from './scrumboard-routing.module';
import { ScrumboardComponent } from './scrumboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IconModule } from '@visurel/iconify-angular';
import { DateTokensModule } from '../../../../@vex/pipes/date-tokens/date-tokens.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrumboardDialogModule } from './components/scrumboard-dialog/scrumboard-dialog.module';
import { PopoverModule } from '../../../../@vex/components/popover/popover.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';


@NgModule({
  declarations: [ScrumboardComponent],
  imports: [
    CommonModule,
    ScrumboardRoutingModule,
    FlexLayoutModule,
    ScrollbarModule,
    MatButtonModule,
    DragDropModule,
    IconModule,
    DateTokensModule,
    MatTooltipModule,
    ScrumboardDialogModule,
    PopoverModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    ContainerModule
  ]
})
export class ScrumboardModule {
}
