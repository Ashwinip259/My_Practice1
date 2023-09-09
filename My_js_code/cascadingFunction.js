


function test(){
    let employees = [
        {name:'Ashwini',age:24},
        {name:'Poonam',age:25},
        {name:'Shruti',age:21},
        {name:'Megha',age:19}
    ]

    let a = employees.map(Object=>{
        return Object.name;
    })
    console.log(a);
}



 function cascading(){
     console.log('function is calling here');
    test();
}