import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //class to write code here
  title = 'My First Application';
  //property
  name! : string; //declaration
  name1? : string;  //declaration
  name3 : string = 'ashu'; //declration +def of properrty
  //any data type:it will aceept all values
  city : any = 'pune'; //here the property name is city
  num1 : any = 20;
  num2 : any = 10;

  InterpolationFunction(){
    return this.num1;
  }

  data = 'Ponam' ;

  carnames = ['Swift','Audi']
 car = this.carnames[1]  


 student = {name:'Ashu',age:25}
stud = this.student.age
}
