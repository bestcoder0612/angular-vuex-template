import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutSimpleComponent } from './page-layout-simple.component';


const routes: Routes = [
  {
    path: '',
    component: PageLayoutSimpleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutSimpleRoutingModule {
}
