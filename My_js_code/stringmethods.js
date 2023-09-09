// //length property
let text = 'I am Ashwini here'
console.log('len',text.length);

//methods
//string.slice(start,end)
let a = text.slice(5,12);
console.log(a);

let b = text.slice(-12,-5);
console.log(b);

console.log(text.substring(6,-9));


//substr()

let a1 = text.substr(2,9);
console.log(a1);


let text1='I live in Pune';
let b1 = text1.substr(6,4);
console.log(b1);

let text2='I live in Pune. Pune is very big city and pune is my favourite city';
let c = text2.replace('Pune',"Banglore")  //g for global flag and i is for insensitive
console.log(c);

let c1 = text2.replaceAll("Pune","Banglore")
console.log(c1);

let c2 = text2.replace(/Pune/gi,"Banglore")  //g for global flag and i is for insensitive
console.log(c2);

//concat

let FN = 'Ashwini';
let LN = 'Paygude'
//let Fullname = FN + " " +LN;
//let Fullname = FN.concat(' ',LN)
let Fullname = FN.concat(' ',LN,' ','Maruti')
console.log(Fullname);

//toLowerCase

let address = 'Pune Shivane';
let x =  address.toLowerCase();
console.log(x);

//toUpperCase
let y = address.toUpperCase();
console.log(y);

//trim
let name = '   Ashwini   ';
let z = name.trim();
console.log('trim',z);

//trimStart()
let w = name.trimStart();
console.log('start',w);

//trimEnd()
let p = name.trimEnd();
console.log('end',p);


//charAt()
 let name2 = 'Ashwini';
 let h = name2.charAt(5);
 console.log(h);

//charCodeAt()
let j = name2.charCodeAt(2);
console.log(j);

//split

let dob = '25-09-1999';
let d = dob.split('-');
console.log(d);
console.log(d[2]);

let FullName = 'Ashwini Maruti Paygude';
let f = FullName.split(' ');
console.log(f);
console.log(f[0]);
console.log(f[2]);
