// function MainFunction(mmm){
//     mmm();
// }
// function SubFunction(){
//    console.log("This is sub Function");
// }
// MainFunction(SubFunction);

// MainFunction(()=>{
//     console.log("hello this is");
// })

// MainFunction(()=>{
//     console.log("Pearl World");
// })

function mainFunction(obj){
    obj(
        ()=>{
            console.log("call back function");
    })
}

mainFunction(
    (obj_call)=>{
    obj_call();
    }
);

mainFunction(
    ()=>{
    console.log("after second call back");
    })

mainFunction((tree)=>{
    console.log("after third call back");
})