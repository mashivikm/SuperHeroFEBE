import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuperHerosComponent } from './super-heros/all-super-heros/all-super-heros.component';
import { AddSuperHerosComponent } from './super-heros/add-super-heros/add-super-heros.component';
import { EditSuperHerosComponent } from './super-heros/edit-super-heros/edit-super-heros.component';

const routes: Routes = [
  {
    path:'',
    component:AllSuperHerosComponent
  },{
    path:'add-super-hero',
    component:AddSuperHerosComponent,
  },
  {
    path:'edit-super-hero/:id',
    component:EditSuperHerosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
