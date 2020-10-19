import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsProgressComponent } from './components-progress.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsProgressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsProgressRoutingModule {
}
