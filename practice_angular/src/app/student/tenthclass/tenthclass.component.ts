import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenthclass',
  templateUrl: './tenthclass.component.html',
  styleUrls: ['./tenthclass.component.scss']
})
export class TenthclassComponent {
  constructor(private router : Router){}

  ninethClass(){
    this.router.navigateByUrl('StudentModule/ninethClass')
  }

}
