import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpCenterGettingStartedComponent } from './help-center-getting-started.component';


const routes: Routes = [
  {
    path: '',
    component: HelpCenterGettingStartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpCenterGettingStartedRoutingModule {
}
