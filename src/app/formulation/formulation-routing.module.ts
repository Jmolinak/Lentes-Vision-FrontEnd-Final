import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulationComponent } from './formulation.component';

const routes: Routes = [{
  path: '', component: FormulationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulationRoutingModule { }
