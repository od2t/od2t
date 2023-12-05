import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriageRoutingModule } from './triage-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TriageRoutingModule,
    SharedModule
  ]
})
export class TriageModule { }
