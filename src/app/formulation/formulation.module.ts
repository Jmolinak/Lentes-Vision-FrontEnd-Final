import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulationRoutingModule } from './formulation-routing.module';
import { FormulationComponent } from './formulation.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    FormulationComponent
  ],
  imports: [
    CommonModule,
    FormulationRoutingModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule
  ]
})
export class FormulationModule { }
