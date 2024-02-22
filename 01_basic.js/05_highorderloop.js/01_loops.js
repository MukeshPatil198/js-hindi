//ForOf loop
const arr = [1,2,3,4,5];
for (const val of arr) {
       // console.log(val); //Apllay on array
}
//forin loop
for (const key in arr) {
    //console.log(key);
}

// foreach loops
arr.forEach( (item,index,arr) => {
    //console.log(item,index,arr);
    
});
const obj = {
      IN  : "india",
      USA : "America",
      RU : "Russan"

}
//for (const num of obj) {
    //console.log(num);  // forof loop does not support object
    //forin loops
    for (const key in obj) {
        
    //         console.log(obj[key]); // forin loops spport the object
        
    }

    //foreach loop
    // obj.forEach( (item) => {
    //     //console.log(item); // does not support
        
    // });
    

const map = new Map()
map.set('IN' ,"India");
map.set('USA' ,"United state");
map.set('ru' ,"russin");
for (const [key ,value]of map) {
    //console.log(key,value);
}
for (const [key,value] in map) {
    //console.log(key,value);  // does not support it
}
map.forEach( (key) => { //A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
    console.log(key);
    
});

const addobj =[
    {
        name : "om",
        age : 12
    },
    {
        name : "ram",
        age : 12
    },
    {
        name : "jay",
        age : 13
    },
    {
        name : "shri",
        age : 14
    },
]
addobj.forEach(  (item) => {
    console.log(item.name);
});

// foreach loops does not retrun value