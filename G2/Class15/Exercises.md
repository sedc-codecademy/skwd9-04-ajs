# Exercise 1

* Make a request to the following [link](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json) to get all the student objects
* Filter all the students with age higher than 20
* Find the student with highest average grade, the average of all average grades and the average of the age of the students
Use reduce for the third requirement.

# Exercise 2

* Make a request to the following [link](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json) to get all the student objects
* After you get the students, get their full names after a timeout of 5 seconds.
* After you get all the students full names, get the documents from the following [url](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json)
* After you get the documents, wait 5 seconds and print them sorted by size ascending.
Use async await.


# Exercise 3
## Create a class Shape that has:
* name
* color
* position,  array of x and y coordinates
* getArea - method that will only write in the console that there is no special implementation for area
* getPerimeter - method that will only write in the console that there is no special implementation for perimeter
* checkPosition - a method that checks if the input is a Shape.
	* If the input is a Shape and if it's x coordinate is in front of this x coordinate, write in console a message
	* If the input is a Shape and if it's y coordinate is in front of this y coordinate, write in console a message
	* If the input is a Shape and if it's x and y coordinates are in front of this x and y coordinates, write in console a message
	
*add method move that is shared among all instances and can be accessed through the class name. It takes a shape as input, logs Moving.. in the console and updates the position of the input, by increasing the coordinates for 5.
 
*create a setter and getter for the color and name property. The setter/getter will log a corresponding message. The setter should do validation.
 
## Add class Rectangle, that inherits from Shape. It should have properties sideA and sideB. Override the getArea and getPerimeter methods correspondingly for a rectangle. 

## Add class Circle, that inherits from Shape. It should have property radius. Override the getArea and getPerimeter methods correspondingly for a circle. 
### Test with few objects.

# Exercise 4
## Task 1
Create 3 object templates. Movie, Actor and Cinema. The structure should be:
Cinema
* Name - string
* Movies - array of Movie
* Address - string
* Print movies - method that prints all the movies in console, using movie's method for printing

Movie
* Title - string
* Genre - string
* Cinemas - array of cinemas where the movie can be found, default empty
* Actors - array of Actor, default empty
* printDetails - method that prints the title and genre
* AddCinema - accepts a cinema and adds it to the array if the cinema is not there
* RemoveCinema - accepts a cinema and removes it from the array if it is there

Actor
* FirstName - string
* LastName - string
* YearOfBirth - number
* Movies - emptyArray as default, not settable
* CurrentMovie - null as default, not settable
* StartMovie - accepts Movie object and adds it to the CurrentMovie property

## Task 2
Make the functions AddCinema, RemoveCinema and StartMovie dynamic.
* AddCinema - When the movie calls AddCinema, the movie should be added to the Movies property of the cinema, if it does not exist there
* RemoveCinema - When the movie calls RemoveCinema, the movie should be removed from the Movies property of the cinema if it exists there
* StartMovie - When the actor calls StartMovie if there was a movie in the CurrentMovie property, that movie should be transferred to Movies and then add the new Movie as CurrentMovie and add the actor to the movies property of the actor.

