import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassAndStyleBindingComponent } from './class-and-style-binding/class-and-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { DataBindingComponent } from './data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassAndStyleBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { }
