import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
constructor(private router : Router){}

tenthClass(){
  this.router.navigateByUrl('StudentModule/tenthClass')
}
}