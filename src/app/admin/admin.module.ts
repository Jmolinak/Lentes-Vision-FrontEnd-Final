import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';


=======
import {MatButtonModule} from '@angular/material/button';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

>>>>>>> origin/william
@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    AdminRoutingModule
=======
    AdminRoutingModule,
    MatButtonModule
>>>>>>> origin/william
  ]
})
export class AdminModule { }
