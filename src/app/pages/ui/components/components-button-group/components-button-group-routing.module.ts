import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsButtonGroupComponent } from './components-button-group.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsButtonGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsButtonGroupRoutingModule {
}
