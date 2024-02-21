//Immediately Invoked function Expression
 //IIFE can use to handle the golobal scope polution
 //and fast exsecute
(function chai(){
    console.log("DB Connection");
})();  //<-------- this ;
// use to arrow function


(()=>{
    console.log("DB Connection");
})();
//Note : this time show this error (intermediate value)(...) is not a function then fist function is not stop so use ;

((Name)=>{
    console.log(`${Name}`);
})("hey")