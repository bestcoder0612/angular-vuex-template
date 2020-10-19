import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { CalendarComponent } from './calendar.component';


const routes: VexRoutes = [
  {
    path: '',
    component: CalendarComponent,
    data: {
      toolbarShadowEnabled: true,
      scrollDisabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {
}
