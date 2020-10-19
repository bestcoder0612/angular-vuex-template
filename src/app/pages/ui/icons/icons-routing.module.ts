import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: IconsComponent,
    data: {
      scrollDisabled: true
    },
    children: [
      {
        path: '',
        redirectTo: 'ic'
      },
      {
        path: 'ic',
        loadChildren: () => import('./icons-ic/icons-ic.module').then(m => m.IconsIcModule)
      },
      {
        path: 'fa',
        loadChildren: () => import('./icons-fa/icons-fa.module').then(m => m.IconsFaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {
}
