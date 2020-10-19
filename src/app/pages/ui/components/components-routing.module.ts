import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: 'overview',
    loadChildren: () => import('./components-overview/components-overview.module').then(m => m.ComponentsOverviewModule)
  },
  {
    path: 'autocomplete',
    loadChildren: () => import('./components-autocomplete/components-autocomplete.module').then(m => m.ComponentsAutocompleteModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'buttons',
    loadChildren: () => import('./components-buttons/components-buttons.module').then(m => m.ComponentsButtonsModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'button-group',
    loadChildren: () => import('./components-button-group/components-button-group.module').then(m => m.ComponentsButtonGroupModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'cards',
    loadChildren: () => import('./components-cards/components-cards.module').then(m => m.ComponentsCardsModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./components-checkbox/components-checkbox.module').then(m => m.ComponentsCheckboxModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'dialogs',
    loadChildren: () => import('./components-dialogs/components-dialogs.module').then(m => m.ComponentsDialogsModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'grid-list',
    loadChildren: () => import('./components-grid-list/components-grid-list.module').then(m => m.ComponentsGridListModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'input',
    loadChildren: () => import('./components-input/components-input.module').then(m => m.ComponentsInputModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'lists',
    loadChildren: () => import('./components-lists/components-lists.module').then(m => m.ComponentsListsModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'menu',
    loadChildren: () => import('./components-menu/components-menu.module').then(m => m.ComponentsMenuModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'progress',
    loadChildren: () => import('./components-progress/components-progress.module').then(m => m.ComponentsProgressModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'progress-spinner',
    loadChildren: () => import('./components-progress-spinner/components-progress-spinner.module').then(m => m.ComponentsProgressSpinnerModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'radio',
    loadChildren: () => import('./components-radio/components-radio.module').then(m => m.ComponentsRadioModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'slide-toggle',
    loadChildren: () => import('./components-slide-toggle/components-slide-toggle.module').then(m => m.ComponentsSlideToggleModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'slider',
    loadChildren: () => import('./components-slider/components-slider.module').then(m => m.ComponentsSliderModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'snack-bar',
    loadChildren: () => import('./components-snack-bar/components-snack-bar.module').then(m => m.ComponentsSnackBarModule),
    data: {
      containerEnabled: true
    }
  },
  {
    path: 'tooltip',
    loadChildren: () => import('./components-tooltip/components-tooltip.module').then(m => m.ComponentsTooltipModule),
    data: {
      containerEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
