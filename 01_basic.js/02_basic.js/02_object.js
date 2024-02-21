const person={
    name: "mukesh",
    last : "gurjar",
    age : 22
};
console.log(person);//print object
person.name="Jayesh"
console.log(person); //update the object
console.log(Object.keys(person)); // keys of object
console.log(Object.values(person)); // values of object
console.log(Object.entries(person)); // both are show
//Object.freeze(person); //The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
person.demo = function(){
     console.log("hellow");
}
console.log(person.demo());
person.demo2 = function(){
    console.log(`hellow,${this.name}`);
}
console.log(person.demo2());

const score = {1:"A" , 2 :"B" }
const score1 =  {3 : "C",4 :"D"}

console.log(Object.assign(score,score1)); //he Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object
const score2 = {...score,...score1}
console.log(score2);



