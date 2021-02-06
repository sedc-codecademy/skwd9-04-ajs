// Functions

// if doesnt return anything we only call the function, nothing else
// if returns anything the value returned must be stored somewhere

// function sayHello() {
//     console.log("HEllo");
// }

// function getFullName() {
//     return "Goce Kabov"
// }
// function sumTwoNumbers(number1, number2) {
//     return number1 + number2;
// }

// let firstNumber = parseInt(prompt("vnesi broj 1"));
// let secondNumber = parseInt(prompt("vnesi broj 2"));

// let sumOfTwoNumbers = sumTwoNumbers(100, 200)
// let sumOfTwoNumbers = sumTwoNumbers(firstNumber, secondNumber);


// sayHello();

// let result = "Goce Kabov"
// let result = getFullName();
// console.log(result);

// Object

// let object1 = {} // literal notation
// let object2 = new Object(); // using constructor

// function createUser(username, password) {
//     return {
//         'userName': username,
//         'password': password
//     }
// }

function User(username, password) {
    // console.log("THIS", this);
    this.userName = username;
    this.password = password;
}

// let user1 = createUser("Goce", "12345") // => { userName: "Goce", password: "12345"}

// let user2 = new User("Goce", "12345"); // new => {userName: Goce, password:12345 }
// console.log(user2)

// let admin = new User("Gordon", "gordon123");
// let users = [admin]

// let userName = prompt("Please insert username:");
// let userPassword = prompt("Please insert password:");

// console.log("USERNAME", userName);
// console.log("PASSWORD", userPassword);

// let newUser = new User(userName, userPassword);

// users.push(newUser);
// console.log(newUser);

// for (user of users) {
//     console.log(user)
// }


// Arrays

// let niza = ["goce", true, new User("Goce", "123"), 123, [1,2,3]];
// console.log(niza)


let names = ["Goce", "Gordon", "Cacko", "Bob", "John"]
//let thirdElement = numbers[2];
// let firstName = "Goce";
// console.log(firstName.length)

// let numbersLength = numbers.length;
// console.log(numbersLength)
// console.log(names.length)



// 1- initialization
// 2- condition
// 3- increment/decrement

// 1 => log all items in console
// for (let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

//

// let numbers = [1,2,3,4,5,6,7,8,9]; // [4,5,6,7,8,9,10,11,12] // 
// let newArray= [];
// for(let i=0; i < numbers.length; i++) {
//     newArray.push(numbers[i] * numbers[i]);
// }
// console.log(newArray);


// create string which will include all elements in array and insert dashes (-) between each two even numbers. 
//For example the output should be 0-254-6-8.
let numbers = [0,2,5,4,6,8];
// console.log(numbers[6]) => undefined

let result = ''; // 0-254-6-8
for(let i = 0; i < numbers.length; i++) {

    result += `${numbers[i]}`

    if(numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) {
        result += `-`
    }
}
// console.log(result)

for(let i = 0; i < 10; i++) {
    console.log("i:", i)
    for(let j = 0; j < 5; j++) {
        console.log("j: ", j)

    }
}


let rowsNumbers = 10;
let cellNumbers = 5;

for (let i = 0; i < rowsNumbers; i++) {

    let row = document.createElement("tr");

    for(let j = 0; j < cellNumbers; j++){

        let cell = document.createElement("td");
        row.appendChild(cell);
    }
}





