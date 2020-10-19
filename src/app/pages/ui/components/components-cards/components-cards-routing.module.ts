import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsCardsComponent } from './components-cards.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsCardsRoutingModule {
}
