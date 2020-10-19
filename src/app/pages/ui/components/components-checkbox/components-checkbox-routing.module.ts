import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsCheckboxComponent } from './components-checkbox.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsCheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsCheckboxRoutingModule {
}
