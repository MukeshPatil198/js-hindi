var C = 300;
let B = 200;
if(true){
    let A = 10;
    const B = 20;
    var C = 30;
    console.log(B);
}



//console.log(A);
console.log(B);
console.log(C);

//#################################################

//NESTED SCOPE

function fun1(username){
    username = "mukesh"
    function fun2(website){
       website = "youtube"
       console.log(username);
    }
   // console.log(website);
     fun2()
   
}
fun1()
//####################################################3
 console.log( one(5));
  function one(num98){
       return num98+1;
  }
 

  //Expression
  two(9)
  const two = function(num89){
     return num89+2;

  }
 // two(9)