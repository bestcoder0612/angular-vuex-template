import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterGuidesRoutingModule } from './help-center-guides-routing.module';
import { HelpCenterGuidesComponent } from './help-center-guides.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HelpCenterGuidesGuideComponent } from './help-center-guides-guide/help-center-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [HelpCenterGuidesComponent, HelpCenterGuidesGuideComponent],
  imports: [
    CommonModule,
    HelpCenterGuidesRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [HelpCenterGuidesGuideComponent]
})
export class HelpCenterGuidesModule {
}
