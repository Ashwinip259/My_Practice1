//this keyword

object = {
    empname : 'Ashu',
    id : 450000,
    salary : 70000,
    fun : function(){
        return this.id
    }
}
console.log(object.fun());


//remove duplicate alphabets

let information = "mumbai is located in MAHARASHTRA";   //he each letter ascii values sobti compare hota so jar small m asel aani capital M asel tar donhi print honar for this convert whole string in either lower case or in upper case
let info = information.toLowerCase();
console.log(info);  //op : mumbai is located in maharashtra
let finalstring = "";
for(let i=0 ; i < info.length ; i++){
    let char = info[i];
    if(!finalstring.includes(char)){
        finalstring += char;
    }
}

console.log(finalstring);



