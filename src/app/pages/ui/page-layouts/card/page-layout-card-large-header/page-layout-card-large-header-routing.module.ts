import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutCardLargeHeaderComponent } from './page-layout-card-large-header.component';


const routes: Routes = [
  {
    path: '',
    component: PageLayoutCardLargeHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutCardLargeHeaderRoutingModule {
}
