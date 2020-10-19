import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsMenuComponent } from './components-menu.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsMenuRoutingModule {
}
