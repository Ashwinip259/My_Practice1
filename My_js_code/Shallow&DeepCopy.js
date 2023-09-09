//shallow copy: if we made changes in newly or original array/object it will reflect in both array coz the memory location is same. 

//will see for array

let names = ['ashu','didi','poonam'];
let names1 = names;
console.log('original names',names);
console.log('newly names',names1);

names[1] = 'neha';
console.log('original names',names); //reflecting in both array
console.log('newly names',names1);

//will see for object now

let obj = {
    name:'Kangana',
    age:56,
    city:'Pune'
}

let obj1 = obj;

console.log('original obj',obj);
console.log('newly obj',obj1);

obj1.age= 89;
console.log('original obj',obj);  ////reflecting in both objects
console.log('newly obj',obj1);


//Deep copy : if we made changes in newly or original array/object it will not reflect in both array coz the memory location is diffrent for both. 

//will see for array first

let array = [20,30,40,50]
let newarray = JSON.parse(JSON.stringify(array));
console.log('Array',array);
console.log('NewArray',newarray);

array[1] = 90;
console.log('Array',array);
console.log('NewArray',newarray);

//will see for the object now 

let emp = {
    ename : 'Ashu',
    empid : 56,
    ecity : 'Mumbai',
    ebirthday : 'sep'
}

let newemp = JSON.parse(JSON.stringify(emp));
console.log('emp',emp);
console.log('newemp',newemp);

emp.ebirthday = 'oct';
console.log('emp',emp);
console.log('newemp',newemp);



