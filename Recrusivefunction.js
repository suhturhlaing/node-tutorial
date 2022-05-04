function myvalue(i){
    console.log(i);
    i++;
    if(i<=10){
        myvalue(i);
    }
    
}
myvalue(1);