import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValueMappingsViewComponent } from './value-mappings-view/value-mappings-view.component';

const routes: Routes = [
  { path: 'view-value-mappings', component: ValueMappingsViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValueMappingRoutingModule { }
