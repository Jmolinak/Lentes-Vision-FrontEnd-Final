import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactenosRoutingModule } from './contactenos-routing.module';
import { ContactenosComponent } from './contactenos.component';


@NgModule({
  declarations: [
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    ContactenosRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactenosModule { }
