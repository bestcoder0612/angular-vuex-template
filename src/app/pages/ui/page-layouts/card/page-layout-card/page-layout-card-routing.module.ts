import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutCardComponent } from './page-layout-card.component';


const routes: Routes = [
  {
    path: '',
    component: PageLayoutCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutCardRoutingModule {
}
