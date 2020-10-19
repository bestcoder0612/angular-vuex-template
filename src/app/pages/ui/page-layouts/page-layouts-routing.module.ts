import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'blank',
    loadChildren: () => import('./blank/blank.module').then(m => m.BlankModule),
  },
  {
    path: 'simple',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./simple/page-layout-simple/page-layout-simple.module').then(m => m.PageLayoutSimpleModule)
      },
      {
        path: 'tabbed',
        loadChildren: () => import('./simple/page-layout-simple-tabbed/page-layout-simple-tabbed.module').then(m => m.PageLayoutSimpleTabbedModule)
      },
      {
        path: 'large-header',
        loadChildren: () => import('./simple/page-layout-simple-large-header/page-layout-simple-large-header.module').then(m => m.PageLayoutSimpleLargeHeaderModule)
      },
      {
        path: 'large-header/tabbed',
        loadChildren: () => import('./simple/page-layout-simple-large-header-tabbed/page-layout-simple-large-header-tabbed.module').then(m => m.PageLayoutSimpleLargeHeaderTabbedModule)
      }
    ]
  },
  {
    path: 'card',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./card/page-layout-card/page-layout-card.module').then(m => m.PageLayoutCardModule)
      },
      {
        path: 'tabbed',
        loadChildren: () => import('./card/page-layout-card-tabbed/page-layout-card-tabbed.module').then(m => m.PageLayoutCardTabbedModule)
      },
      {
        path: 'large-header',
        loadChildren: () => import('./card/page-layout-card-large-header/page-layout-card-large-header.module').then(m => m.PageLayoutCardLargeHeaderModule)
      },
      {
        path: 'large-header/tabbed',
        loadChildren: () => import('./card/page-layout-card-large-header-tabbed/page-layout-card-large-header-tabbed.module').then(m => m.PageLayoutCardLargeHeaderTabbedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutsRoutingModule {
}
