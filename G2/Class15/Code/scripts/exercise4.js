function Cinema(name, address) {
    this.name = name;
    this.address = address;
    this.movies = [];
    this.printMovies = function () {
        for (let movie of this.movies) {
            console.log(movie.printDetails());
        }
    }
}

function Movie(title, genre) {
    this.title = title;
    this.genre = genre;
    this.cinemas = [];
    this.actors = [];
    this.printDetails = function () {
        console.log(`${this.title} - ${this.genre}`);
    }
    this.addCinema = function (cinema) {
        if (this.cinemas.filter(x => x.name === cinema.name).length > 0) {
            console.log("Cinema exists")
            return;
        }
        this.cinemas.push(cinema);
        if (cinema.movies.filter(x => x.title == this.title).length == 0) {
            cinema.movies.push(this);
        }
    }
    this.removeCinema = function (cinema) {
        if (this.cinemas.filter(x => x.name === cinema.name).length === 0) {
            console.log("Cinema does not exist")
            return;
        }
        for (let i in this.cinemas) {
            if (this.cinemas[i].name === cinema.name) {
                this.cinemas.splice(i, 1);
            }
        }
        if (cinema.movies.filter(x => x.title == this.title).length > 0) {
            for (let i in cinema.movies) {
                if (cinema.movies[i].title === this.title) {
                    cinema.movies.splice(i, 1);
                }
            }
        }
    }
}

function Actor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.movies = [];
    this.currentMovie = null;
    this.startMovie = function (movie) {
        if (this.currentMovie != null) {
            this.movies.add(this.currentMovie);
        }
        this.currentMovie = movie;
        movie.actors.push(this);
    }
}
let cinema1 = new Cinema("Cineplexx", "Address 1");
let cinema2 = new Cinema("Cineplexx 2", "Address 2");
let movie1 = new Movie("Titanic", "Drama");
let actor1 = new Actor("Leonardo", "DiCaprio", 1974);
let actor2 = new Actor("Kate", "Winslet", 1975);

console.log(cinema1);
console.log(cinema2);
console.log(movie1);
console.log(actor1);
console.log(actor2);

movie1.addCinema(cinema1);
movie1.addCinema(cinema2);
console.log(cinema1);
console.log(cinema2);
console.log(movie1);

actor1.startMovie(movie1);
console.log(movie1);
console.log(actor1);
movie1.removeCinema(cinema2);




