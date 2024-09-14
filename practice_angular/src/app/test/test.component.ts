import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
 constructor(private router : Router){}

 endUser(){
  this.router.navigateByUrl('AdminModule/endUser')
 }

 Back(){
  this.router.navigateByUrl('HomePage')
 }
}
