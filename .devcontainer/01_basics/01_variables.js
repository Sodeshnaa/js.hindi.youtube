const accountId = 144553
let accountEmail = "shna@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "dubeysodeshna@google.com"
accountPassword = "1169"
accountCity = "UP"

console.log(accountId);

/*
Prefer not to use var bcz of issue in block scope and functional scope
*/
console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);
