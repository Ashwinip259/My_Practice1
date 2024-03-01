import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enduser',
  templateUrl: './enduser.component.html',
  styleUrls: ['./enduser.component.scss']
})
export class EnduserComponent {
constructor(private router : Router){}

User(){
  this.router.navigateByUrl('AdminModule/User')
}
}
