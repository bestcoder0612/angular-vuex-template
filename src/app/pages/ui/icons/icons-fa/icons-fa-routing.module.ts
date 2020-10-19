import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsFaComponent } from './icons-fa.component';


const routes: Routes = [
  {
    path: '',
    component: IconsFaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsFaRoutingModule {
}
