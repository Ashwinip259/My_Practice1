//diff
//1 :var has a Function scope, wheras let and const has block scope


function abc(){
    let a = 90;
    let b = 50;
    const c = 45;



    console.log(a); //90
    console.log(b); //50
    console.log(c); //45

    



    if(true){
        let a1 = 900;
        var b1 = 500;
        const c1 = 450;
        console.log(a1);  //900
        console.log(b1);  //500
        console.log(c1);  //450
    
    }
    console.log(b1); // b1 cha keyword var a so we can access throught the function anywhere like in block also and outside block also
    // console.log(a1);  //will get error here coz keyword let hai so scope block hai so we cant access it outside block
    // console.log(c1); //same as like let

}

abc();



//2 diffrence: hoisting


//hoisting is possible with var
name = 'ashu';
var name;
console.log(name);




//hoisting is not possible with let and const 
// name1 = 'Hruta';
// let name1;
// console.log(name1);


//const sathi ek line mdhe ch var declare aani define karava lagta separte line la kel tar error yete 
// name2 = 'shru';
// const name2 ; 



//3 diffrence: Redeclaration
//redeclaration is possible with var 
var student = 'akshay';
var student = 'Poonam';
console.log(student); //op: poonam , akshay value overwrite honar ponam ni

//redeclaration is not possible with let & const
// let student1 = 'rutu'
// let student1 = 'misha'
// console.log(student); //error: student is alredy declared

//const la ekda value assign keli tar ti permanant  houn jate fixed houn jate so we cant redecalre or reassign it
// const x = 50;
// const x = 30;
// console.log(x); //getting error

//3rd diffrence: reassign
//reassigning value to the variable is possible with let and var but not possible with const

let a = 10;
a = 20;
console.log(a); //20

let b = 'pink';
b = 'green';
console.log(b); //green

//reassignment is not possible with const keyword
const c = 90;
c = 60;
console.log(c);  //error


