console.log("Method Changing Function");

// class MainClass{
//     one(){
//         console.log("one");
//         return this;
//     }
//     two(){
//         console.log("two");
//         return this;
//     }
// }

// let myclass= new MainClass();
// myclass.one();
// myclass.two();
// myclass.one().two();
// myclass.two().one();


class mainClass{
    static welcome(){
        console.log("hello welcome");
        let obj = new mainClass();
        return obj;
    }
    third(){
        console.log("this is third");
        return this;
    }
    four(){
        console.log("this is four");
        return this;
    }
}
mainClass.welcome();
let myclass = new mainClass();
myclass.third();
mainClass.welcome().four();
// mainClass.welcome().third().four();
// mainClass.welcome().four().third();

