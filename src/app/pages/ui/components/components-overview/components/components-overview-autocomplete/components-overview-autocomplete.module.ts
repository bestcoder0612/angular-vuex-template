import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewAutocompleteComponent } from './components-overview-autocomplete.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightModule } from '../../../../../../../@vex/components/highlight/highlight.module';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [ComponentsOverviewAutocompleteComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    ReactiveFormsModule,
    HighlightModule,
    IconModule
  ],
  exports: [ComponentsOverviewAutocompleteComponent]
})
export class ComponentsOverviewAutocompleteModule {
}
