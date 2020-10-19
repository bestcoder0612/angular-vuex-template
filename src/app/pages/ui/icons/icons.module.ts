import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';


@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    ScrollingModule,
    IconModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    ContainerModule,
    ColorFadeModule
  ]
})
export class IconsModule {
}
