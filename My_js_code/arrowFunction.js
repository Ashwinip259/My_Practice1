function addition(a,b){
    return a+b;
}

let x = addition(20,30);
console.log(x);


//before arrow function

let a = function(){
    return 30+10;
}
 
 console.log(a());

 //using arrow function //parameterless function

 let sub = () => 20*3

 
 console.log(sub());

 //parametarized function

 let mul = (u,v) => u*v
 let d = mul(4.5,5.6)
 console.log(d);


 //return keyword
 let div = () => {
    let res = 10/5;
    return res;
 }
 let d1 = div();
 console.log(d1);











let a1=function(){
    return 9+1;
}
console.log(a1());

let mult = () => 9*3
console.log(mult());





let a6 = function(x,y){
    return x+y;
}
let add = a6(2,3);
console.log(add);
//console.log(a6(2,3));

//using arrow function
let sum = (a,b) => a+b;
console.log('sum',sum(2,1));



 
