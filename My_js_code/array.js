//how can we add 2 arrays

//1. by using spread operator we can 
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [...arr1, ...arr2]
console.log(arr3);

//2.by using concat method

let arr4 = arr1.concat(arr2);
console.log(arr4);

//3.by using push method
arr1.push(...arr2);
console.log(arr1); //orginal array change hoto push method ni



let employees = [
    {name:'Ashwini',age:24},
    {name:'Poonam',age:25},
    {name:'Shruti',age:21},
    {name:'Megha',age:19},
    [30,40,50,[80,90,10]]
]

console.log(employees);
let a = employees.map(Object=>{
    return Object.age
})
console.log(a);
let b1 = employees[0].name;
console.log(b1);

console.log('new',employees[4][3][0]); //80

