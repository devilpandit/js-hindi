const accountId = 144553
let accountEmail = "prakash@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "p@gmail.com"
accountPassword = "4355466"
accountCity = "pune"

/*
Prefer no to use var
because of issue in block scope anf functional scope

*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
