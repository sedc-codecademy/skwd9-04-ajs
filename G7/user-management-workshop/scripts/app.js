class App {
    constructor(users) {
        this.users = users;
        this.renderUsers(this.users);
        this.setEventListeners();
    }

    tableBody = document.querySelector('tbody');
    searchInput = document.querySelector('#search-input');

    setEventListeners() {
        this.searchInput.addEventListener('input', e => this.findUserByFullName(e.target.value))
    }

    findUserByFullName(searchTerm) {
        const users = this.users.filter(user => user.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
        this.renderUsers(users);
    }

    renderUsers(users) {
        this.tableBody.innerHTML = '';
        users.forEach(user => {
            this.tableBody.innerHTML +=
            `<tr>
                <td>${user.id}</td>
                <td>${user.fullName}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isMarried ? 'Yes' : 'No'}</td>
                <td>${user.spouse || 'Single'}</td>
                <td>${user.pets?.length ? user.pets.join(', ') : 'No pets'}</td>
                <td>${user.age}</td>
                <td>${user.city}</td>
                <td>${user.country}</td>
                <td></td>
            </tr>`
        });
    }
}

class User {
  constructor(firstName, lastName, age, city, country, spouse, pets) {
    this.id = Math.round(Math.random() * 10000);
    this.fullName = `${firstName} ${lastName}`;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMarried = !!spouse; // 'Eli' = true, '' = false, undefined = false, null = false
    this.city = city;
    this.country = country;
    this.spouse = spouse;
    this.pets = pets;  // ['dog', 'cat'] - OK | 'dog, cat' - NOT OK
  }
}

let marko = new User("Marko", "Djurovic", 20, "Skopje", "Macedonia", "Elena", [
  "dog",
  "fish",
]);
let kiril = new User("Kiril", "Petkovski", 30, "Krusevo", "Macedonia", null, [
  "hamster",
]);
let philip = new User("Philip", "Sawyer", 45, "London", "UK", "Elisabeth");
let john = new User("John", "Snow", 67, "Munich", "Germany", "Lara", [
  "dog",
  "cat",
]);
let mike = new User("Michael", "Scott", 50, "Scranton", "USA");

let usersDataBase = [marko, kiril, philip, john, mike];

const app = new App(usersDataBase);