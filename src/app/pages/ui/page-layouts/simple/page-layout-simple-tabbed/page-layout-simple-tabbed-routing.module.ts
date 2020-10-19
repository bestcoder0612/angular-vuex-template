import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutSimpleTabbedComponent } from './page-layout-simple-tabbed.component';
import { VexRoutes } from '../../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: PageLayoutSimpleTabbedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutSimpleTabbedRoutingModule {
}

