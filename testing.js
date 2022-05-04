// console.log("hello");


//by traditional
// function greeting(){
//     return "greeting";
// }
// console.log(greeting());

//by arrow
// greeting =()=>{
//     return "second greeting";
// }
// console.log(greeting());

// let msg = greeting();
// console.log(msg);

// class MainClass{
//     first(){
//         return "first function";
//     }
// }

// let obj = new MainClass();
// let msg = obj.first();
// console.log(msg);


 const MainObject = {
    //  SubObject : function(){
    //      return "SubObject Hello";
    //  }
     arrowObject : ()=>{
        return "arrow Object";
     }
 }
 console.log(MainObject.arrowObject());