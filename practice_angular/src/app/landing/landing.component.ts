import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
constructor(private router : Router){
//router is reference property of Router class here
}

  Home(){
    this.router.navigateByUrl('HomePage')
  }
}
