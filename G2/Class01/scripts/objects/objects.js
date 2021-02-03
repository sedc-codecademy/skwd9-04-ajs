console.log("=======Undefined arguments, foreach, changing methods=========");
function Dog(name, color, age, favoriteFood){
	this.name = !name ? "unnamed" : name; // in case there is no name
	this.color = color;
	this.age = age;
	this.hasOwner = false; // default value for all
    this.favoriteFood = favoriteFood;
    this.hasPropertyAge = function(){
        return this.hasOwnProperty("age");
    },
    this.hasPropertyNumberOfLegs = function(){
        return this.hasOwnProperty("numberOfLegs");
    },
	this.bark = function(){
		console.log("BARK BARK BARK");
		};
	this.doIEat = function(food){
		if(!!this.favoriteFood){
            this.favoriteFood.forEach(fav => fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
                console.log("NOM NOM NOM");
                }
        else{
            console.log("I don't eat!");
        }
}
}

let sparky = new Dog("Sparky", "Brown", 1, ["Chicken", "Cucumber"]);
console.log(`Has property age: ${sparky.hasPropertyAge()}`);
console.log(`Has property number of legs: ${sparky.hasPropertyNumberOfLegs()}`);
sparky.bark();
sparky.doIEat("milk");
let doggy = new Dog(); // will have value unnamed for property name
sparky.bark = function(){
    console.log('AF', 'AF', 'AF');
};

sparky.bark();


let noNamedDog = new Dog(undefined, "brown", 1, ["Chicken", "Cucumber"]);
console.log(`name of noNamedDog: ${noNamedDog.name}`);
console.log(sparky.name);
console.log(`Has property number of legs: ${noNamedDog.hasPropertyNumberOfLegs()}`);
noNamedDog.numberOfLegs = 4;
console.log(`Has property number of legs: ${noNamedDog.hasPropertyNumberOfLegs()}`);
console.log(`Has property number of legs: ${sparky.hasPropertyNumberOfLegs()}`);

