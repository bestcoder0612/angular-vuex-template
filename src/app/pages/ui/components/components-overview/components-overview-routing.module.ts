import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsOverviewComponent } from './components-overview.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: ComponentsOverviewComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsOverviewRoutingModule {
}
