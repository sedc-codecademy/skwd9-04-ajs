# Build your app 
## Olympic Games
Olympic Games is an application that is meant to create a simulation of a real-life event.

### Requirements
* There should be class OlympicGames that has properties and methods:
	* Location
	* Number of sports games
	* List of countries that will contest
	* Duration (Date from and to)
	* Number of people that will contest
	* List of sports
	* ChangeSportsList - a method that will change the list of sports that should be.
	* ChangeDuration - method that will change the duration of the games with properties from and to.
	* ChangeNumberOfSportsGames, ChangeListOfCountries, and ChangeNumberOfPeople - each of these methods should change the date regardless of the number of games that might be included or excluded, also with countries that might contest and the number of people as well.
	
* There should be a class Country that has properties (create get/set for each of the properties) and method:
	* Name
	* Total number of people that will be sent to contest for any sports
	* Number of medals that the country already has
	* Medal rank - sum of all medals
	* addMedals - a method that should add the number of medals that was achieved to the number of medals that the country already has. Also if the medal is GOLD then you should add +2 to the medal rank, if it's SILVER then add +1 and 0.5 in case the medal is BRONZE.
	
* There should be class Sport that has properties and method:
	* Name
	* Rating
	* Description - properties that will represent the way that the sport is played
	* Type of sport - individual or team
	* Number of games
	* Winner - a method that expects two or more countries (in order from the first place till the last place). If the sport is individual and the number of games is 1, you should take the first three countries from the list and add medal for them (2 (first place), 1 (second place), 0.5 (last place) rank of medal) else you should throw simple Error. In case the sport type is a team and the number of games is 2, you should take the first three countries from the list and add medal for them (2 (first place), 1 (second place), 0.5 (last place) rank of medal) else you should throw simple Error.

### Extra requirements
  * Separate Individual and Team sports as classes that will inherit from Sport and remove the method Winner in the Sport class
  * In TeamSports class you should keep a history of all matches that were played for that sport (EX. Sport is Handball and Macedonia won against Denmark with 60 - 50 (total numbers of goals from the two matches) also Macedonia won against Spain 40 - 38 and Spain won against Denmark with 39 - 38...The first place goes to Macedonia, then Spain, then Denmark (do not limit yourself to 3 teams (countries))). The format of all results should be the first country name (total result) - second country name (total result). Add method winner that will calculate and add medals.
  * In IndividualSports class you should as well keep a history of all matches with the names of all countries and their result. The format of the match should be the name of the country (total result). Add method winner that will calculate and add medals (bare in mind the history of all matches should not be in order by countries result (let say the sport is swimming 50m butterfly M - and the results are England (5), Macedonia (1), USA (2), Serbia (4), Italy (3)...We can see that the result of the match are not in order so you need to pick the one that has the lowest rank, the second lowest rank, and the third lowest rank) and to that countries, you should add medals).