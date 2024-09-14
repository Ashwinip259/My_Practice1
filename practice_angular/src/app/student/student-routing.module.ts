import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenthclassComponent } from './tenthclass/tenthclass.component';
import { NinethclassComponent } from './ninethclass/ninethclass.component';

const routes: Routes = [
  {path : 'tenthClass', component : TenthclassComponent},
  {path: 'ninethClass', component : NinethclassComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
