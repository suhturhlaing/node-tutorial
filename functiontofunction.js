function MainFunction(){
    function first(){
        return "first function";
    }
    function second(){
        return "second function";
    }
    return second();
}

let obj = MainFunction();
console.log(MainFunction());