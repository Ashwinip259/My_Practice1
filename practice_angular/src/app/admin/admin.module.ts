import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { EnduserComponent } from './enduser/enduser.component';

console.log('Admin Module ');



@NgModule({
  declarations: [
  
  
  
          UserComponent,
                   EnduserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
