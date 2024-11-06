let score = "sodeshna"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNum = 77

let stringNumber = String(someNum)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********************************Operations******************************************

let value = 3
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "sodeshna"
let str2 = "dubey"

let str3 = str1 + str2
console.log(str3);

/*not preferred
console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
*/

/*preferred
console.log((3+4)*5%3);
*/

/*not preferred
console.log(+true);//1
console.log(+"");//0
*/

/*not preferred
let num1, num2, num3
num1 = num2 = num3 = 2+2
*/

let gameCounter = 100
++gameCounter;
console.log(gameCounter);






