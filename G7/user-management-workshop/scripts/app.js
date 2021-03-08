class App {
  constructor(users) {
    this.users = users;
    this.renderUsers(this.users);
    this.setEventListeners();
  }

  tableBody = document.querySelector("tbody");
  searchInput = document.querySelector("#search-input");
  homePage = document.querySelector("#home-page");
  formPage = document.querySelector("#form-page");
  inputs = Array.from(this.formPage.querySelectorAll(".form-control"));
  submitBtn = document.querySelector("#submit-btn");

  setEventListeners() {
    this.searchInput.addEventListener("input", e =>
      this.findUserByFullName(e.target.value)
    );

    this.submitBtn.addEventListener("click", () => this.addUser());

    this.users.map(user => this.tableBody.querySelector(`#user-${user.id}`)).forEach(tr => {
        const id = tr.id.split('-')[1];
        tr.querySelector('.btn-danger').addEventListener('click', () => this.deleteUser(id))

        tr.querySelector('.btn-warning').addEventListener('click', () => this.editUser(id))
    });
  }

  deleteUser(id) {

  }

  editUser(id) {
      console.log(id)
  }

  validateInputs(inputs) {
    return inputs.every(input => !!input.value);
  }

  clearInputs(inputs) {
    inputs.forEach(input => (input.value = ""));
  }

  addUser() {
    if (!this.validateInputs(this.inputs)) {
      alert("Please check inputs and try again!");
      return;
    }

    const [firstName, lastName, city, country, spouse, age] = this.inputs.map(
      input => input.value
    );
    const pets = Array.from(
      document.querySelector("#pets").selectedOptions
    ).map(option => option.value);

    let newUser = new User(
      firstName,
      lastName,
      age,
      city,
      country,
      spouse,
      pets
    );

    this.users = [...this.users, newUser];
    this.renderUsers(this.users);
    this.clearInputs(this.inputs);
  }

  findUserByFullName(searchTerm) {
    const users = this.users.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.renderUsers(users);
  }

  renderUsers(users) {
    this.tableBody.innerHTML = "";
    users.forEach(user => {
      this.tableBody.innerHTML += `<tr id="user-${user.id}">
                <td>${user.id}</td>
                <td>${user.fullName}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isMarried ? "Yes" : "No"}</td>
                <td>${user.spouse || "Single"}</td>
                <td>${user.pets?.length ? user.pets.join(", ") : "no pets"}</td>
                <td>${user.age}</td>
                <td>${user.city}</td>
                <td>${user.country}</td>
                <td>
                <button type="button" class="btn btn-sm btn-danger">X</button>
                <button type="button" class="btn btn-sm btn-warning">E</button>
                </td>
            </tr>`;
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
    this.pets = pets; // ['dog', 'cat'] - OK | 'dog, cat' - NOT OK
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
