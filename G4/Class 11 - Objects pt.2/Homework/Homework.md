# Homework Inheritance

## Animal Kingdom

- Create Animal constructor function that has:

* name
* age
* latinName of the animal
* numberOfLegs
* print method that need to print animal name their latin name next to it, age of the animal and number of legs

- Create AquaticAnimal constructor function that inherit from Animal and has:

* type
* liveInSaltWater boolean value
* liveInFreshWater boolean value
* changeLifeEnvironment method that expect type of the water that animal lives in. In case is "salt" it should change property liveInSaltWater value, same with liveInFreshWater in case the value of the type is "fresh"

- Create FlyingAnimal constructor function that inherit from Animal and has:

* type
* favoriteFood
* currentPlace - current place where animal is located in
* flyOut - method that expect place and change current place property of the animal

- Create TerrestrialAnimal constructor function that inherit from the Animal and has:

* hasFur boolean value
* typeOfFur
* sound - method that log sound that the animal make

- Create WildAnimal constructor function that inherit from the TerrestrialAnimal and has:

* typeOfFood
* favoriteFood

- Create DomesticAnimal constructor function that inherit from the TerrestrialAnimal and has:

* name
* ownerName

Create multiple object from each type of animals with different values
