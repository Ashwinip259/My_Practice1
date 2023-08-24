//conditions: if, if-else, else-if, switch
let a=10;
let b=20;
if (a>b) {
    console.log('a is small');
} 

//if else
 if (a>b)
  {
    console.log('a is greater');
  }
  else{
    console.log('b is greater');
  }

  //else if
  if (a==b) {
    console.log("a and b are equal");
  }
  else if(a>b){
    console.log('a is greater');
  }
  else if(a<b){
    console.log('b is greater');
  }
  else{
    console.log('else block');
  }

  //switch 
  let color='black';
  switch (color) {
    case 'red':
        console.log('red');
        break;

        case 'black':
        console.log('black');
        break;

        case 'blue':
        console.log('blue');
        break;
  
    default:
        console.log('no color');
        break;
  }



  
