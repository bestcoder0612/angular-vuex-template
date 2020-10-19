import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsGridComponent } from './contacts-grid.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    redirectTo: 'all'
  },
  {
    path: ':activeCategory',
    component: ContactsGridComponent,
    data: {
      scrollDisabled: true,
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsGridRoutingModule {
}
