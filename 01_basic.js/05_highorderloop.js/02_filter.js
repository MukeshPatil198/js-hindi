//filter :- The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 const arr =[1,2,3,4,5,6,7,8,9,10]
const newarr = arr.filter( (num)=>  num >4) //automatically return the value
console.log(newarr);

// map
const arr1 =[1,2,3,4,5,6,7,8,9,10]
const newarr1 = arr.map( (num)=>  num*10) //automatically return the value
console.log(newarr1);

//reduce  :- he reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value
const arro =[1,2,3,4,5,6,7,8,9,10]
const score = arro.reduce( (acc,currval)=>{
    return acc + currval
},0)
console.log(score);


