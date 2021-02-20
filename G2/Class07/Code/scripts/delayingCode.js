//setTimeout vs setInterval
console.log("===setTimeout===");
console.log(new Date());
//arrow
setTimeout(() => console.log(new Date()), 5000);
//anonymous
setTimeout(function(){console.log(new Date());}, 5000);

let myInterval = setInterval(()=>console.log(new Date()), 2000);
document.getElementById("clearInterval").addEventListener("click", function(){
    clearInterval(myInterval);
});

function firstGreeting(){
    setTimeout(()=> console.log("First greeting"), 4000);
};
function secondGreeting(){
    console.log("Second greeting");
}
firstGreeting();
secondGreeting();

//function on timeout
function greetingOnTimeout(){
    console.log("Hello after timeout");
}
setTimeout(greetingOnTimeout, 10000);

//we want to guarantee the order
function first(){
    setTimeout(()=>{ 
        console.log("First");
        second();
    }, 4000);
};
function second(){
    console.log("Second");
}
first();