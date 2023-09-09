let number = [10,20,30,40];//isko copy banani hai 4 ways hai, foreach/push , spread operator , directly assign karo ,for 9 ,for , for of
//directly assign
 let no1 = number
 console.log('direct assign',no1);

 //using spread operator

 let no2 = [...number]
console.log('spread operator',no2);


const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log('combined',numbersCombined);

//for each
let no3 = []
number.forEach(item=>{
    no3.push(item);
})
console.log('foreach',no3);

//for of
let no4 = []
for(let a of number){
    no4.push(a)
}
console.log('for of',no4);


//for
let no5 = []
for(i=0;i<number.length;i++)
{
    no5.push(number[i])
}
console.log('for',no5);


//part kaise copy kare on array

let array = [10,20,30,40,50,60,70]
let [a,b,c,...d] = array   //spread operator sequence madhe last ch yeto
console.log('a',a);
console.log('b',b);
console.log('c',c);
console.log('d',d);


//we can also use spread operator on object

let object = {
    name:'Ashu',
    age:24,
    birthday:'sep',
    date:25
}

//directly assign
let object1 = object
console.log('directly',object1);

//by using spread operator //if single copy banani hai to that will be okay but mostly spread operator object pe avoid ki jata hai in case of merging coz merging karte time pahile wale object ke values dusre object ke values se overwrite hote hai , this means data loss hota hai isliye avoid ki jata hai 
let object2 = {...object};
console.log('spreadoperator',object2);



//merging //concatenation
let object3 = {
    name:'Ashu',
    age:24,
    birthday:'sep',
    date:25
}
let object4 = {
    name:'Aarushii',
    age:29,
    birthday:'oct',
    date:25,
    city:'mumbai'
}

let newobj = {...object3, ...object4}   //object 3 chya saglya values object 4 chya values ni overwrite honar
console.log('mergeobj',newobj);

