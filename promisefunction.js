// function promise1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve('hello promise 1')
//         },1);
//     });
// }

// function promise2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve('hello promise 2')
//         },1);
//     });
// }

// async function result(){
//     console.log("start");
//     await Promise.all([await promise1(),await promise2()]).then(value=>{
//         console.log('Promise all' ,value);
//     })
//     console.log("end");
// }

// result();


function data(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('food')
        },1);
    });
}

function datafill(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('data fill hello')
        },1);
    }).then(value =>{
       console.log('value =', value);
       return value;
    })
}

async function output(){
    console.log('start');
    let obj = await data();
    console.log(obj);
    let obj1 = await datafill();
    console.log(obj1);
    console.log('end');
}

output();
