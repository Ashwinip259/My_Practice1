function addition(a,b){
    return a+b;
}

let x = addition(20,30);
console.log(x);


//before arrow function

let a = function(){
    return 30+10;
}
 let add = a();
 console.log(add);

 //using arrow function //parameterless function

 let sub = () => 20*3

 let sub1 = sub();
 console.log(sub1);

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
 
