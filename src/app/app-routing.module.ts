import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const childrenRoutes: VexRoutes = [
  {
    path: '',
    redirectTo: 'dashboards/analytics',
    pathMatch: 'full',
  },
  {
    path: 'dashboards/analytics',
    loadChildren: () => import('./pages/dashboards/dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
  },
  {
    path: 'apps',
    children: [
      {
        path: 'chat',
        loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'contacts',
        loadChildren: () => import('./pages/apps/contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarModule),
        data: {
          toolbarShadowEnabled: true
        }
      },
      {
        path: 'aio-table',
        loadChildren: () => import('./pages/apps/aio-table/aio-table.module').then(m => m.AioTableModule),
      },
      {
        path: 'help-center',
        loadChildren: () => import('./pages/apps/help-center/help-center.module').then(m => m.HelpCenterModule),
      },
      {
        path: 'scrumboard',
        loadChildren: () => import('./pages/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule),
      },
      {
        path: 'editor',
        loadChildren: () => import('./pages/apps/editor/editor.module').then(m => m.EditorModule),
      },
    ]
  },
  {
    path: 'pages',
    children: [
      {
        path: 'pricing',
        loadChildren: () => import('./pages/pages/pricing/pricing.module').then(m => m.PricingModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./pages/pages/faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'guides',
        loadChildren: () => import('./pages/pages/guides/guides.module').then(m => m.GuidesModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./pages/pages/invoice/invoice.module').then(m => m.InvoiceModule)
      },
      {
        path: 'error-404',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      },
      {
        path: 'error-500',
        loadChildren: () => import('./pages/pages/errors/error-500/error-500.module').then(m => m.Error500Module)
      }
    ]
  },
  {
    path: 'ui',
    children: [
      {
        path: 'components',
        loadChildren: () => import('./pages/ui/components/components.module').then(m => m.ComponentsModule),
      },
      {
        path: 'forms/form-elements',
        loadChildren: () => import('./pages/ui/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
        data: {
          containerEnabled: true
        }
      },
      {
        path: 'forms/form-wizard',
        loadChildren: () => import('./pages/ui/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
        data: {
          containerEnabled: true
        }
      },
      {
        path: 'icons',
        loadChildren: () => import('./pages/ui/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'page-layouts',
        loadChildren: () => import('./pages/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
      },
    ]
  },
  {
    path: 'documentation',
    loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
  }
];

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: CustomLayoutComponent,
    children: childrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
