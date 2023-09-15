//callback function : In a function we can pass another function as a parameter

function substraction(){
    return 200-10;
}


//we are passsing substraction function as a parameter here not a function so () nahi aayenge

function fun(substraction)  
{
    
    console.log('aaaaa',substraction);
}

console.log('bbbbb',fun(substraction()));




//one more eg
function mul (u,v){
    return u*v;
}

console.log(mul(3,4));//12


function func (a,b,mul)
{
    console.log(a);
    console.log(b);
    console.log(mul);   //12
}

console.log(func(30,40,mul(3,4))); 





