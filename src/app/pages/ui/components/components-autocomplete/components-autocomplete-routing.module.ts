import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsAutocompleteComponent } from './components-autocomplete.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsAutocompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsAutocompleteRoutingModule {
}
