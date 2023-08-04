// 1.string
var address='pune,411023'
console.log(address);

// 2.number
let amount = 20390
console.log(amount);
let amnt = 20.34  //= is assignment operator
console.log(amnt);

//3.boolean : true/false
let passed = true;
console.log(passed);

//type of operator : defines type of data //data type konsa hai variable ka wo bata deta hai 
console.log(typeof(amount));
console.log(typeof(address));
console.log(typeof(passed));

//undefined
var abc;
console.log(abc);
console.log(typeof(abc));

//null : exceptional case : null ek data ki value hai : null ka datatype hota hai object
let cash = null
console.log(cash);
console.log(typeof(cash));

//object
let studentData = {
    name : 'Asiya',
    age : 25,
    city : 'pune',
    contact : 9876456789
}

console.log(studentData);
console.log(typeof(studentData));

//array

let list = [20,30,56,98,65,98];
console.log(list);
console.log(typeof(list));
