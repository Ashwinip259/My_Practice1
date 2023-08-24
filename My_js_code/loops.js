

// //array
// arr = ['Ashu','Poonam','Divya','Kavya',200,true,test()];

// function test() {
//     return 30;
// }
// console.log(arr);
// console.log(arr.length);

//to count length
// console.log(arr[1]); //to check element on particular index




//for loop

let cars = ['kia','audi','mercedes','rangerover','Buggati']
for ( let a=0; a < cars.length; a++) {
    console.log(cars[a]);    
}

//for in: use for an object

student = {
    name:'ashu',
    age:24,
    mob:9834829157
}

for(let a in student){
    console.log(student[a]);
}

//for of:use for an array

let array = [20,30,40,50,90,110]
for(let x of array){
    console.log(x);
}

//do while
let m=10;

do {
    m++;
    console.log(m);
} while (m<15);
