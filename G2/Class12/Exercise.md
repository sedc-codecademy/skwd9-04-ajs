# Exercise
## Create a class Animal that has:
* name
* type - carnivore/herbivore/omnivore
* age
* size
* eat - a method that checks if the input is an Animal.
	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
* isEaten = default false
* Add method birthday that is shared among all instances and can be accessed through the class name. It takes an animal as input, logs Happy Birthday in the console and increments the age property of the animal for one.
 
* create a setter and getter for the type property. The setter/getter will log a corresponding message. The setter should do validation.
 
Add class Dog, that inherits from Animal. It should have property color and method bark that says "BARK BARK". Create object, call the method bark, eat and print the size of the dog.
