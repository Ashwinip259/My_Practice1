import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnduserComponent } from './enduser/enduser.component';
import { UserComponent } from './user/user.component';
import { TenthclassComponent } from '../student/tenthclass/tenthclass.component';
import { NinethclassComponent } from '../student/ninethclass/ninethclass.component';

const routes: Routes = [
  {path : 'endUser' , component : EnduserComponent},
  {path: 'User', component : UserComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
