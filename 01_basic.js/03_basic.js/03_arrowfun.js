const myobj ={
     firstName : "Suraj Dhangar",
     age : 23,
     welcomemassage : function(){
          console.log(`username is ${this.firstName} and age is${this.age} `);
          console.log(this);
        
     }
};
myobj.welcomemassage()
console.log(this);//the this keyword refers to an object. Which object depends on how this is being invoked (used or called)
//############################################################################
  //ArrowFubction

  const arrrow =()=>{
        let username = "hitesh"
        console.log(this);
  }
 //******************************************************** 
 
    const arrrow1 =(num,num1)=>{
        return num +num1;
    }
    console.log(arrrow1(2,5));  // you can use the return statement so use to {} bracket 
    //******************************************************
    const got = (num1,num2) => num1+num2  // you can use () bracket
    console.log(got(3,5));
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const getfun = (iusername)=> {(username = "hitesh")}
    console.log(getfun())
