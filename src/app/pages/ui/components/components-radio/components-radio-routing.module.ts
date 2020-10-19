import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRadioComponent } from './components-radio.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsRadioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRadioRoutingModule {
}
