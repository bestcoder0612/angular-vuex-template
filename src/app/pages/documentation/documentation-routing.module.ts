import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { VexRoutes } from '../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: 'changelog',
    loadChildren: () => import('./changelog/changelog.module').then(m => m.ChangelogModule),
    data: {
      containerEnabled: true,
    },
  },
  {
    path: '',
    data: {
      containerEnabled: true,
    },
    children: [
      {
        path: '',
        redirectTo: 'introduction'
      },
      {
        path: 'introduction',
        component: DocumentationComponent,
      },
      {
        path: 'folder-structure',
        component: DocumentationComponent
      },
      {
        path: 'installation',
        component: DocumentationComponent
      },
      {
        path: 'changing-styling-and-css-variables',
        component: DocumentationComponent
      },
      {
        path: 'using-custom-colors-for-the-primarysecondarywarn-palettes',
        component: DocumentationComponent
      },
      {
        path: 'build-for-production',
        component: DocumentationComponent
      },
      {
        path: 'start-development-server',
        component: DocumentationComponent
      },
      {
        path: 'further-help',
        component: DocumentationComponent
      },
      {
        path: 'configuration',
        component: DocumentationComponent
      },
      {
        path: 'adding-menu-items',
        component: DocumentationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule {
}
