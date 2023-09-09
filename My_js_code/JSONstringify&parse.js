let myObject = {
    dog: "black",
    cat: "white",
    koala: "grey",
    count: 3
  };
  

  //ab ye kya hai ek javascript ka object hai, usko hume json string mai convert karna hai


let myObject1 = JSON.stringify(myObject);
console.log('original obj',myObject);
console.log('new obj',myObject1); // aata ithe json string madhe convert zala sagla

//aata ya json string la tula javascript object mdhe convert karaychay we can do that by using parse

let myObject2 = JSON.parse(myObject1) //we can achieve this step by one more way
//let myObject2 = JSON.parse(JSON.stringify(myObject));
console.log('original obj',myObject1);
console.log('new obj',myObject2);


//if kuch specific valie chahiye object mai se to javascript object mai se nikal sakte hai , strigify (json string) se nahi nikal sakte
console.log(myObject1.cat);
console.log(myObject2.cat);



//array of object
employee = {
    name : 'sudarshan',
    favcolours : ['blue','black'],
    empcar  : [
        {carname:'swift',color:'blue'},
        {carname:'Audi',color:'black'}
    ],
    empadd : 'pune'
}                                                               





//converting json string into the javascript object
let sss = '{"dog":"black","cat":"white","koala":"grey","count":3}'
let sss1 = JSON.parse(sss);
console.log(sss1);
console.log(sss1.count);


//it is possible to stringify javascript arrays

let color = ['blue','black','white']
let color1 = JSON.stringify(color);
console.log(color1);

let color2 = '["blue","black","white"]'
let color3 = JSON.parse(color2);
console.log(color3);