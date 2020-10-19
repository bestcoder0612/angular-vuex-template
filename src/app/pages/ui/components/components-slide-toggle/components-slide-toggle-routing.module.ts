import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsSlideToggleComponent } from './components-slide-toggle.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsSlideToggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsSlideToggleRoutingModule {
}
