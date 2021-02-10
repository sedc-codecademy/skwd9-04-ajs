let fName = "Kate"; //global
let lName = "Johnson"; //global
function getFullname(firstName, lastName){
    console.log(`Fname: ${fName}`);
    if(firstName.length > 1){
        //inside a block
        let blockResult = `${firstName} ${lastName}`; //block scope
        var localResult = `${firstName} ${lastName}`; //local (function) scope
    }
    //console.log(`Block result: ${blockResult}`); //error
    console.log(`Local result: ${localResult}`);
}
//console.log(localResult);
getFullname("Marija","Petrovska");
//console.log(`First name: ${firstName}`); //ERROR - firstName is local to the function getFullname

let ten =  10; // Global scope
function sumPlusOne(num1, num2){
	let one =  1; // Function sumPlusOne scope
	console.log(num1 + num2 + one);
	function add5(number){
		console.log(number +  5); // Function add5 scope
	};
	add5(one);
	function add10(number){
		console.log(number +  ten); // Function add10 scope
	};
	add10(ten);
}
sumPlusOne(ten,7);