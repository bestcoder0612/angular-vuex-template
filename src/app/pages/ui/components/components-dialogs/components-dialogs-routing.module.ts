import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsDialogsComponent } from './components-dialogs.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsDialogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsDialogsRoutingModule {
}
