import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'triage',
    loadChildren: () => import('./triage/triage.module').then(m => m.TriageModule)
  },
  {
    path: 'value-mapping',
    loadChildren: () => import('./value-mapping/value-mapping.module').then(m => m.ValueMappingModule)
  },
  {
    path: '', redirectTo: '/triage/dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
