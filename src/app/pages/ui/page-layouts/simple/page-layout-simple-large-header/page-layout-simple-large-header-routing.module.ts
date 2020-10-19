import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutSimpleLargeHeaderComponent } from './page-layout-simple-large-header.component';
import { VexRoutes } from '../../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: PageLayoutSimpleLargeHeaderComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutSimpleLargeHeaderRoutingModule {
}
