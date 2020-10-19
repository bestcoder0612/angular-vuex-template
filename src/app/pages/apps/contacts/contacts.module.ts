import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule {
}
