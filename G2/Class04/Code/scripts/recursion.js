function sumTo(num){
   // console.log(`sumTo(${num})`);
    if(num === 0){
       // console.log("Input is 0");
        return 0;
    }
    // console.log(`return ${num} + sumTo(${num-1})`)
    return num + sumTo(num-1);
}

sumTo(5);