/*
console.log(typeof "hellow world");
console.log(typeof 43576895);
console.log(typeof 2947897389749n);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

const a=10;
const b=12;

if (a>b){
    
   console.log("a is greater"); 
}else{
    console.log("b is greater");
}
const n=20

for(let i=10;i<n;i++){
    console.log(i);
}

//json

const json={
    name:"abhin",
    surname:"abhin",
    movies :a
};



try{
    const d=10;
    d=12
    
}
catch{
    console.log("error");
};






function square(x){
    return x*x;
}
console.log(square(8754356));



//npm init
//initialise


*/


const Quote = require('inspirational-quotes');

/*console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote

*/







var cowsay = require("cowsay");

console.log(cowsay.say({
    text : Quote.getRandomQuote(),
    e : "xx",
    T : "k "
}));
