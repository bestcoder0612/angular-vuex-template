import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpCenterPricingComponent } from './help-center-pricing.component';


const routes: Routes = [
  {
    path: '',
    component: HelpCenterPricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpCenterPricingRoutingModule {
}
