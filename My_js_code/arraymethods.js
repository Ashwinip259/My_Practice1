//lengthproperty
let arr = [20,40,3,9.5,76,56,34,9.9];
let a = arr.length;
console.log(a);

//array toString
let a1 = arr.toString();
console.log(a1);

//pop() //removes last ele from aaray
let fruits = ['Banana','Mango','Grapes','Orange']
let f = fruits.pop(); //ithe pop element disel
console.log(f);

let fruits1 = ['Banana','Mango','watermelon','Guava']
fruits1.pop();
console.log(fruits1);  // ithe original array without last elemrnt



//push // adds element at the end  //ithe push aani pop mdhe orignnal array change hot asto mhnaun direct original array print kelay // pop exception mdhe yeil tyach op remove elemnt dista
let colors = ['blue','red','pink','white']

let array = [1,2,3,4];
// let b = colors.push('balck');
// console.log(b);  //returns length

colors.push('black','brown',array);
console.log(colors);


//shift //removes first element from array

let flowers = ['Jai','Jui','Lily','Jasmine'];
let shiftteditem = flowers.shift();
console.log(shiftteditem);
console.log(flowers);

//unshift //adds element at the start 
//pop and shift are same just start end cha diffrence : it removes element // push and unsfift are same just start end cha diffrence : it adds element

let cloths = ['jeans','kurti','top','legins'];
let cl = cloths.unshift('saree');
console.log(cl); //it will return length same like push

cloths.unshift('blowse');
console.log(cloths); //it will return original array


//delete operator
 let arr1 = ['Jai','Jui','Lily','Jasmine'];
 let a4 = arr1.indexOf('Jui');
 console.log(a4);
 
 delete arr1[1];
 console.log(arr1);
 console.log(arr1.length);

//concat
let arr3 = ['Jai','Jui','Lily'];
let arr4 = ['Rose','Mogra'];
let arr5 = ['Jasmine','Tulip'];
let flwrs = arr3.concat(arr4,arr5);
console.log(flwrs);

//join //this array retuens string in op
let arr6 = ['Jai','Jui','Lily','Jasmine'];
let b = arr6.join('*');
console.log(b);
let b1 = typeof(b);
console.log(b1);

//slice
let arr7 = ['Jai','Jui','Lily','Jasmine'];
let d1 = arr7.slice(2) //start index inclusive and end exclusive

console.log(d1);

//splice

let arr8 = ['Jai','Jui','Lily','Jasmine'];
//arr8.splice(2,2,'Rose','Mogra');
arr8.splice(2);
console.log(arr8);

//sort //ascending order mai sorting karke deta hai
let arr9 = ['Tulip','Mogra','Jai','Rose'];
arr9.sort();
console.log('sort',arr9);

//reverse
let arr10 = ['Jai','Lily','Rose','Tulip'];
arr10.reverse();
console.log('reverse',arr10);

//sort+reverse // descending order mai sorting karke deta hai, pehle sort karaych mg reverse maraych

let arr11 = ['Tulip','Mogra','Jai','Rose'];
arr11.sort().reverse();
console.log('sort+reverse',arr11);





