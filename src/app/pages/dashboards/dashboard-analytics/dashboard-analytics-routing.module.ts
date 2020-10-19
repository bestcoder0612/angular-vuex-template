import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAnalyticsComponent } from './dashboard-analytics.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardAnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAnalyticsRoutingModule {
}
