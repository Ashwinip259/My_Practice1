import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';

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

GenderM = 'Male';
GenderF = 'female';

Dance = 'dancing';
Read = 'Reading';
Sing = 'Singing';

arraytotal : any = []


Hobby(data1 : any){
console.log(data1.target.value);
this.arraytotal.push(data1.target.value)
console.log(this.arraytotal);

}

Redirect(data3 : any){
  console.log(data3);
}

studentname = 'Ankita';
favcountry = 'USA'


number1 : any ;
number2 : any ;
result : any;

additionOfNumbers(){
  this.result = this.number1 + this.number2
  console.log('addition',this.result);
  
}









gen(data:any){
  console.log(data.target.value);
  

}



}






