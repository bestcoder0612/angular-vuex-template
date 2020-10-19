import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelpCenterComponent } from './help-center.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: HelpCenterComponent,
    data: {
      toolbarShadowEnabled: true
    },
    children: [
      {
        path: '',
        redirectTo: 'getting-started'
      },
      {
        path: 'getting-started',
        loadChildren: () => import('./help-center-getting-started/help-center-getting-started.module').then(m => m.HelpCenterGettingStartedModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('./help-center-pricing/help-center-pricing.module').then(m => m.HelpCenterPricingModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./help-center-faq/help-center-faq.module').then(m => m.HelpCenterFaqModule)
      },
      {
        path: 'guides',
        loadChildren: () => import('./help-center-guides/help-center-guides.module').then(m => m.HelpCenterGuidesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpCenterRoutingModule {
}
