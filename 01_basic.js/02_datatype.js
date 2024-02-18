//DataType 
let A = 21;  //typeof Number
let B = "Ganesh gurjar";  //typeof String
let C = true;  // typeof boolean
let D = null;  // important  typeof null is Object
let E = BigInt ("128");  // typeof bigint
let F = Symbol("I am Mukesh Gurjar") //typeof Symbol
let G; //typeof undefined
console.table([A,B,C,D,E,F,G]);
console.log(typeof A);
console.log(typeof B);
console.log(typeof C);
console.log(typeof D);
console.log(typeof E);
console.log(typeof F);
console.log(typeof G);
//Datatype in JS is => Number ,String ,Boolean,Null,Undefined,Symbol,bigint  Total =7 primitive 
// and non-primitive is object
let p = Symbol("I am Mukesh Gurjar")
let q = Symbol("I am Mukesh Gurjar")
console.log(p===q); //Not same beacause symbol store the unique value   
 