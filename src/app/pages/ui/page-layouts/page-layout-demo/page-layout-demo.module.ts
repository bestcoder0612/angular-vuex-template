import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutDemoComponent } from './page-layout-demo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PageLayoutDemoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PageLayoutDemoComponent]
})
export class PageLayoutDemoModule {
}
