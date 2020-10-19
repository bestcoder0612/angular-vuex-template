import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormElementsComponent } from './form-elements.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: FormElementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule {
}
