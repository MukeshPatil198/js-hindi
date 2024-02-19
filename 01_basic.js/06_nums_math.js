let score = 400;
console.log(score);

let scoreboard = new Number(120);
console.log(scoreboard);
//##############Method#####################3
console.log(scoreboard.toString().length);
console.log(typeof scoreboard); // object
console.log(scoreboard.toFixed(2));
console.log(scoreboard.toPrecision(3));
let scorevalue = 100000;
console.log(scorevalue.toLocaleString('en-In'));//Indian currancy

//**************************Maths******************************** */

console.log(Math.abs(-5)); //abs is convert the negative value in positive form
console.log(Math.round(4.5)); //this means round up the number ex .5 less than 4 and .5 greather than 5
console.log(Math.ceil(4.2));//defind only large value
console.log(Math.floor(4.9));//defind only the small value
console.log(Math.max(4,6,8,8,9));
console.log(Math.min(4,6,8,9,5));
console.log(Math.random()); //random function can show the value under the o and 1
console.log(Math.random()*10+1);


