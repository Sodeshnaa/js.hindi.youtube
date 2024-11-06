/*
primitive
7 types : string, number, boolean, null, undefined, symbol, bigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);//false

const bigNum = 123456789456789654321n

/*
reference (non-primitive)
3 types : array, objects, functions
*/

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name:"sodeshna",
    age:"20",
}

const myFunction = function(){
    console.log("Hello");
    
}

console.log(typeof bigNum);

// JS is a dynamic and weakly typed lang.

// 2 types of memory - stack and heap

//stack(primitive dataTypes), heap(non-primitive dataTypes)
// stack makes a copy
// heap gives reference(og value)

let myYoutubename = "sodeshnasingh"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email:"sodeshnasingh@gmail.com",
    upi:"user@oksbi"
}

let userTwo = userOne

userTwo.email="singh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
