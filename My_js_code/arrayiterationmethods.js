//First iteration methos: forEach()

 

let arr = ['nose','eyes','hand','legs'];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//forEach()
let newarr = []
arr.forEach(item =>{
    newarr.push(item);
})
console.log(newarr);

//using spread operator
let emptyarr = [...arr]
console.log(emptyarr);

//so my requirement is except hand move all elements into new array

arr.splice(2,1);
console.log(arr);
let blankarr = [];

arr.forEach(ele =>{
    blankarr.push(ele)
})
console.log(blankarr);

console.log('original arr',arr); //original array change ho chuka hai

//we can achieve this one more way

let array = ['nose','eyes','hand','legs'];
let array1 = [];
array.forEach(item=>{
    if(item != 'hand')
    array1.push(item);
})
console.log('new arrayyyyy',array1);


//ab requirement kya hai ki upar original array change hogya i.e arr //without changing orignal array except hand copy karke dikha



let arr1 = ['nose','eyes','hand','legs'];
let arr2 = [];
arr1.forEach(item =>{
    arr2.push(item)
})
console.log(arr2);
let newarr1 = [];
arr2.splice(2,1);
console.log(arr2);

arr2.forEach(item=>{
    newarr1.push(item)
})
console.log('newarray',newarr1);
console.log('original array',arr1); //see original array change nahi hua


//second ietration method: map()

//suppose ek array of object hai;

let employees = [
    {name:'Ashwini',age:24},
    {name:'Poonam',age:25},
    {name:'Shruti',age:21},
    {name:'Megha',age:19}
]



let a = employees.map(Object=>{
    return Object.name
})

console.log(a);



//we can achieve the same thing with other way also:

// let Empnames = [];
// employees.map(object=>{
//     Empnames.push(object.name)
// })

// console.log(Empnames);


//can  we call function inside function : yes : usko bolte hai cascading function


