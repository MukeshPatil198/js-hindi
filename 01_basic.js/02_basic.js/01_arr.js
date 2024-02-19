// //const arr = [12,"mukesh",null,undefined,true]; //valid
// const arr = [1,2,3,4,5,6,7] //=> we can create array in this type
// console.log(arr);
// const arr1 = new Array(1,2,3,4,5,6,7,8,9,10) //=> we are create a array in this type
// console.log(arr1);
//##################### --Method -- ##################################3

const arr12 = [1,2,3,4,5,6,7];
//console.log(arr12.fill(3,2,5));
 //console.log(arr12.push(8)); //this syntax only add number array and show only add number
 arr12.push(8)
 console.log(arr12);
 arr12.pop();
 console.log(arr12);
 arr12.unshift(12)
 console.log(arr12);
 arr12.shift();
 console.log(arr12);
 console.log("A" , arr12);
 const myn1 = arr12.slice(2,5) //slice does not change the array
 console.log(myn1);
 console.log("B" , arr12);
 const myn2 = arr12.splice(2,5); //splice method can change the array
 console.log(myn2);
 console.log(arr12);
 console.log(arr12.includes(6)); //output in boolean formm
 console.log(arr12.indexOf(2)); // 1 position 
 console.log(arr12.indexOf(5 )); // -1 beacause array wili be change so o/p is -1
 const arr13 = [12,4,52,56,75,35,78,85,43,2]
 console.log(arr13.sort());
 console.log(arr13.reverse());
//################################################################################

const p = ["suraj","nitin","jayesh"];
const q = ["vishal","yash","raj"]
 p.push(q);
//console.log(p); // add array from array
const r = p.concat(q)
console.log(r);
//sprad operater
const orry = [...p,...q]
console.log(orry);

const arrr = [1,2,3,4,[5,6],[4,7,3],12,4]
const arrr1 =arrr.flat(Infinity)
console.log(arrr1);

console.log(Array.isArray("Tejas")); // ask him to this is array so ans is false
console.log(Array.from("Tejas")); //convert the array

let score1 = 123;
let score2 = 343;
let score3 =124;
console.log(Array.of(score1,score2,score3));




