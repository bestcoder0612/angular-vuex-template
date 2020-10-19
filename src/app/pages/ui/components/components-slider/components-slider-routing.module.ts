import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsSliderComponent } from './components-slider.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsSliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsSliderRoutingModule {
}
