//Arithmatic operators +,-,*,%,/,++,--

let num = 20+30;
console.log(num);

let a = 20;
console.log(a++) //post increment //here ++ ka meaning hai +1
console.log(a)
console.log(++a); //pre increment

// Assignment operators =,+=,-+,*=,%=,**=
let x=50;
x+=10; //addition assignment operator
console.log('value of x',x);

let y=50;
let z=50;
y-=z; //sub assign operator //50-10=40
console.log('value of y',y);

//comparison operators
let j=40; k=40;
console.log(j==k);

let u=10;
let v='10';
console.log(u===v);

let b=20;
let c='10';
console.log(b>c);
console.log(b<c);

let m='20';
let n=20;
console.log('!=',m!=n);
console.log('!==',m!==n);   //ya madhe ek kahitari true aala tari o/p is always true aani donhi cased  false zale tar op false.  

let p=50;
let q=10;
console.log('>=', p >= q);
console.log('<=', p <= q);

let d=200;
d>500 ? console.log('d is greater') : console.log('d is smaller');

// let text1 ="A";
// let text2 ="B";
// console.log('Ascii',text1<text2);

// let text1 ="A";
// let text2 ="65";  //ek value and ek character cant be compare
// console.log('Ascii',text1===text2);

let text1 ="A";
let text2 ="65";  // OP is true bcoz values are diffrent even if Dtype is same.
console.log('Ascii',text1!==text2);





//Logical operators
let p1=20;
let p2=40;
console.log('&&',p2>p1 && p1<p2); //if both conditions are true op is true and if one of them is false then op is false 
console.log('||',p2>p1 || p1>p2); //if both conditions are true op is true and if one of them is true op is true

let p3=true;
console.log('!',p3);
console.log('!',!p3);


