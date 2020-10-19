import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowdownModule } from 'ngx-showdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShowdownModule.forRoot({
      flavor: 'github',
      tables: true,
      openLinksInNewWindow: true,
      encodeEmails: true
    }),
  ],
  exports: [ShowdownModule]
})
export class MarkdownModule {
}
