import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { TenthclassComponent } from './student/tenthclass/tenthclass.component';


const routes: Routes = [
  {path : '', component : LandingComponent},
  {path : 'HomePage', component : HomeComponent},
  {path : 'LandingPage', component : LandingComponent},
  {path : 'Test' , component : TestComponent},
 

  {path : 'AdminModule' , loadChildren:()=>import('./admin/admin.module').then(m => m.AdminModule)},
  {path : 'StudentModule' , loadChildren:()=>import('./student/student.module').then(m => m.StudentModule)}
   //blank path rakha hai that means jab root path ho localhost
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
