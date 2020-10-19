import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsTableRoutingModule } from './contacts-table-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollbarModule } from '../../../../../@vex/components/scrollbar/scrollbar.module';
import { ContactsTableComponent } from './contacts-table.component';
import { ContactsDataTableComponent } from './contacts-data-table/contacts-data-table.component';
import { ContactsEditModule } from '../components/contacts-edit/contacts-edit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from '../../../../../@vex/directives/container/container.module';
import { ContactsTableMenuComponent } from './contacts-table-menu/contacts-table-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [ContactsTableComponent, ContactsDataTableComponent, ContactsTableMenuComponent],
  imports: [
    CommonModule,
    ContactsTableRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatDialogModule,
    ScrollbarModule,
    ContactsEditModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSidenavModule
  ]
})
export class ContactsTableModule {
}
