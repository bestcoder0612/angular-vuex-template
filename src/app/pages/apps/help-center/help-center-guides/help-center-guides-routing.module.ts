import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpCenterGuidesComponent } from './help-center-guides.component';


const routes: Routes = [
  {
    path: '',
    component: HelpCenterGuidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpCenterGuidesRoutingModule {
}
