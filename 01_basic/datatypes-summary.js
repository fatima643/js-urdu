// memory ma data ko kis tarha store kiya jata ha or kis tarha 
// data ko access kiya jata hai es base py data ki 2 types ha 


// primitive (es ma data ka refrence nhi balky us data ki copy di jati ha )
// 7,types ,Strings,Numbers,Boolean,null,undefined,symbol,BigIn
// Dynamically Typed: JavaScript does not require you to define variable types explicitly.

const score=100
const anotherscore=100.3
const isLoggedIn= false // datatype boolean
const outSIdeTem= null // datatype object
const userEmail= undefined // datatype undefined

const Id= Symbol('123')  // datatype symbol
const anotherId= Symbol('123')  // datatype symbol

// console.log(Id===anotherId);

// const bigNumber= 36537389300383738393n      // datatype bigInt

// console.log(typeof isLoggedIn)
// console.log(typeof outSIdeTem)
// console.log(typeof userEmail)
// console.log(typeof Id)
// console.log(typeof anotherId)
// console.log(typeof bigNumber)
console.log(typeof bigNumber)




// Refrence (Non-primitive) (es ma data ka refrence diya jata ha )
// 3 types, Array, Objects, Function 

// Array
const heros=["imranhan","quid Azam"] //datatype object
// Object
const myObejct={
    name:"fatima",
    age:22
}  //datatype object
// Function
const myFunction= function(){
    // console.log("hello world");
    
} //datatype function


// console.log(typeof heros)
// console.log(typeof myObejct)
// console.log(typeof myFunction)
