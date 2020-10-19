import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../../../@vex/interfaces/vex-route.interface';
import { PageLayoutSimpleLargeHeaderTabbedComponent } from './page-layout-simple-large-header-tabbed.component';


const routes: VexRoutes = [
  {
    path: '',
    component: PageLayoutSimpleLargeHeaderTabbedComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutSimpleLargeHeaderTabbedRoutingModule {
}
