import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueMappingRoutingModule } from './value-mapping-routing.module';
import { ValueMappingsViewComponent } from './value-mappings-view/value-mappings-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ValueMappingsViewComponent
    ],
    imports: [
        CommonModule,
        ValueMappingRoutingModule,
        SharedModule
    ]
})
export class ValueMappingModule {
}
