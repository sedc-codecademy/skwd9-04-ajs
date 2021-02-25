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

function createPerson(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            people.push(person)
            const error = false;
            if (!error) {
                resolve()
            } else {
                reject("ERROR OCCURED!");
            }
        }, 2000)
    })
}

// createPerson({ name: "Tosho", age: 50 })
//     .then(getPeople)
//     .catch(error => console.log(error))
//     .finally(() => console.log("I WILL EXECUTE NO MATTER WHAT!"))

// console.log("I DONT CARE ABOUT THE PROMISE, I MUST EXECUTE NOW< I AM IN A HURRY!")

// Promise.all

function getPlanetResidentsByPlanet() {
    fetch("https://swapi.dev/api/planets/1")
        .then(res => res.json())
        .then(planet => {
            let promises = [];
            planet.residents.forEach(residentUrl => {
                promises.push(fetch(residentUrl).then(res => res.json()))
            })
            Promise.all(promises).then(people => console.log(people));
        })
}


let getPlanetResidentsByPlanetAsync = async () => {
    let promises = [];
    let response = await fetch("https://swapi.dev/api/planets/1");
    let planet = await response.json();
    planet.residents.forEach(residentUrl => {
        promises.push(fetch(residentUrl).then(res => res.json()));
    })
    let people = await Promise.all(promises);

    
    // with combining with then we make our lifes easier

    // let finalPeople = [];
    // for(let res of people) {
    //     finalPeople.push(await res.json());
    // }

    console.log(people)
}

getPlanetResidentsByPlanetAsync();




// Async / Await

async function fetchUsersAsync() {
    try {
        // console.log("I AM IN FETCH USERS");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.status);
        }
        let users = await response.json();
        console.log(users);
        console.log("END.")
    } catch (error) {
        console.log(`ERROR: STATUS: ${error}`)
    }
    
}

// fetchUsersAsync();
// console.log("I DONT CARE ABOUT THE PROMISE, I MUST EXECUTE NOW, I AM IN A HURRY!")


