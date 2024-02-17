const accountId = 121;  //Variable defined with const cannot be redecleared & reasigned  // Variable defined with const have BlockScope
let accountName = "Mukesh Gurjar"; //Variable decleared with let have BlockScope //Variable decleard with let must be declared before use //variable decleared with let cannot be redclared in the same Scope 
var accountpassword ="92837228"; // variable declared the redecared and resigned
accountEmail = "mukesh@google.com"; // do not use this statement in js
let accountState; // bydefault undefined
 
//accountId = 123; //Not alllow b
console.log(accountId);
accountName = "Vishal Gurjar";
accountpassword="12345";
accountEmail = "vishal@google.com";
console.table([accountId,accountName,accountpassword,accountEmail,accountState]);
/*prefer not use to var variable because issue from block and function scope */