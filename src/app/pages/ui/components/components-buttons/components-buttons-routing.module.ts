import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsButtonsComponent } from './components-buttons.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsButtonsRoutingModule {
}
