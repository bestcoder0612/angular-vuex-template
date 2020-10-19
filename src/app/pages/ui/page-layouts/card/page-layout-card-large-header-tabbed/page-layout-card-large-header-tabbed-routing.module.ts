import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutCardLargeHeaderTabbedComponent } from './page-layout-card-large-header-tabbed.component';


const routes: Routes = [
  {
    path: '',
    component: PageLayoutCardLargeHeaderTabbedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutCardLargeHeaderTabbedRoutingModule {
}
