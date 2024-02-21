function myname() {
    console.log("hellow");
}
//myname() //call the function
//###########################################################
function addnumber(num1,num2){
    //const result = num1+num2
    //return result //The return statement ends function execution and specifies a value to be returned to the function caller.
    return num1+num2
    //Note - wuthout return statement use do not have stored value in other variable
}
//addnumber(5,6)
const result = addnumber(23,5)
//console.log(`result is`,result);
//###########################################################

function userlogin(username){
    if(!username)
    {
        console.log("plz enter the userr name");
    }
    return `${username},loggin`
}
console.log(userlogin("jayshankar"));
//#######################################################

function scope(num12,num21){
    return num12+num21
}
console.log(scope(" "));
//##########################################################
//USE IN RSET OPERTATOR (...)
function shooping (...num123){
    return num123;
}
 console.log(shooping(123,432,445,666,7888,999)); // o/p in array form 
 //##################################################
 function shooping1 (val1,valu2,...num123){
    return num123;
}
 console.log(shooping1(123,432,445,666,7888,999)); // val1 store in =123,val2 is store in =>432  and other are store in array
 //######################################################
 //Object With Function
 const MYObj={
      CourseName : "chai our code",
      price : 3768
 }
 function handleobj(anyobj){
    console.log(`coursename is${anyobj.CourseName} and price is ${anyobj.price} `);

 }
  //handleobj(MYObj)
  handleobj({
    CourseName :"Galaxy",
    price : 1234   
  })
  //###################################################################
  //ARRAY with Function
  const myarr =[123,432,355,654,677];
  function handlearr(getarray){
      return getarray[1];
  }
 //console.log(handlearr(myarr));
  console.log(handlearr([123,4555,677,8999,999,123]));
  //##############################################################33




