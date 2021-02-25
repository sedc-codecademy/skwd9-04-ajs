let people = [
    { name: "John", age: 28},
    { name: "Bob", age: 38}
];

function getPeople() {
    setTimeout(() => {
        people.forEach(person => {
            document.body.innerHTML += `<li>${person.name}</li>`
        })
    }, 0)
}

function createPerson(person, callback) {
    setTimeout(() => {
        people.push(person)
        callback(); // getPeople()
    }, 0)
}

createPerson({ name: "Tosho", age: 50 }, getPeople);
