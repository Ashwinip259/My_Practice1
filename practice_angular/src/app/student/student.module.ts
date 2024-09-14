import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { TenthclassComponent } from './tenthclass/tenthclass.component';
import { NinethclassComponent } from './ninethclass/ninethclass.component';

console.log('Student Module');



@NgModule({
  declarations: [
    TenthclassComponent,
    NinethclassComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
