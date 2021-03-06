// // function User(name, email) {
// //     this.id = Math.floor(Math.random() * 100);
// //     this.name = name;
// //     this.email = email;
// //     this.printUserInfo = function () {
// //         console.log(`${this.name} - ${this.email}`)
// //     }
// // }

// // let john = new User('John', 'john@mymail.com');
// // console.log(john);

export class User {
  constructor(name, email) {
    this.id = Math.floor(Math.random() * 100);
    this.name = name;
    this.email = email;
  }

  #password = ''; //private property

  setPassword(password) {
      this.#password = password;
  }  

  getPassword() {
      console.log(this.#password)
  }

  printUserInfo() {
    console.log(`${this.name} - ${this.email}`);
  }
}

// let password = 'password'

// let john = new User("John", "john@mymail.com");

// john.setPassword('hikdgsakhgdahs')
// john.getPassword()

// john.#password = 'newPassword'


// class Student extends User {
//   constructor(name, email, academy, group, track) {
//     super(name, email);

//     this.academy = academy;
//     this.group = track.toLowerCase() === 'nodejs' ? 'G8' : group;
//     this.track = track;
//   }

//   printStudentInfo() {
//       console.log(
//           `${this.name} is a student of the ${this.academy} Academy in SEDC, he is in group ${this.group}.`
//       )
//   }
// }

// let petar = new Student("Petar", "petar@mymail.com", "Code", "G7", "NodeJS");

// // console.log(petar);

// // petar.printUserInfo();
// // petar.printStudentInfo();

// // john.printUserInfo();
// // john.printStudentInfo();

// // console.log(john)
// // console.log(petar)
// // console.log(petar instanceof Student)
// // console.log(petar instanceof User)
// // console.log(petar instanceof Object)
// // console.log(petar instanceof Array)
// // console.log(petar instanceof String)
// // console.log(john instanceof User)
// // console.log(john instanceof Student)

// class Trainer extends Student {
//     constructor(name, email, academy, group, track, jobTitle, experience, students, isActive = false) {
//         super(name, email, academy, group, track)

//         this.jobTitle = jobTitle;
//         this.experience = experience;
//         this.students = students;
//         this.isActive = isActive;
//     }

//     get studentsLength() {
//         return this.students.length
//     }

//     get academy() {
//         return this._academy;
//     }

//     set academy(academy) {
//         this._academy = academy + ' Academy'
//     }

//     printTrainerInfo() {
//         console.log(
//             `${this.name} is a trainer in ${this.group}, on the ${this.track} tack within the ${this.academy} in SEDC. He has ${this.experience} years of experience working as ${this.jobTitle}.`
//         )
//     }

//     static addYearsOfExperience(trainer) {
//         trainer.experience++;
//     }

//     static addStudent(trainer, student) {
//         if (trainer.students.includes(student)) {
//             throw new Error('This student is already added!')
//         }
//         trainer.students = [...trainer.students, student]
//     }
// }

// let martin = new Trainer('Martin', 'martin@mymail.com', 'Code', 'G1', 'NodeJS', 'Net Developer', 3, [], true);

// let dejan = new Trainer('Dejan', 'dejan@mymail.com', 'Code', 'G2', 'NodeJS', 'React Developer', 3, [])

// // console.log(dejan.academy);

// // console.log(dejan.studentsLength)

// // console.log(dejan);
// Trainer.addYearsOfExperience(dejan);

// Trainer.addStudent(dejan, petar)

// console.log(dejan.studentsLength)
// Trainer.addStudent(dejan, petar)

// dejan.printUserInfo()
// dejan.printStudentInfo()
// dejan.printTrainerInfo()
// console.log(martin);
// martin.printTrainerInfo();

// Animal exercise

/*
Create a class Animal that has:
- name
- type - carnivore/herbivore/omnivore
- age
- size
- eat - a method that checks if the input is an Animal:
- If the input is an Animal and If this object animal is herbivore write - in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
- If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the - console: The animal (this animal name) ate the (the input animal name).
- If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large.
- If the input is not an animal just write: The animal (this animal name) is eating (the input).
- isEaten = default false
*/

// class Animal {
//     constructor(name, type, age, size, isEaten = false) {
//         this.name = name;
//         this.type = type;
//         this.age = age;
//         this.size = size;
//         this.isEaten = isEaten;
//     }

//     get type() {
//         return this._type;
//     }

//     set type(type) {
        
//         type = type.toLowerCase();

//         // if (type !== 'carnivore' && type !== 'omnivore' && type !== 'herbivore') {
//         //     throw new Error('There is no such type!');
//         // } else {
//         //     this._type = type;
//         // }

//         if (type === 'carnivore' || type === 'omnivore' || type === 'herbivore') {
//             this._type = type;
//         } else {
//             throw new Error('There is no such type!');
//         }
//     }

//     eat(food) {
//         if (food instanceof Animal) {
//             if (this.type === 'herbivore') {
//                 console.log(`The animal ${this.name} is a herbivore and does not eat other animals!`)
//             } else {
//                 if (this.size >= food.size * 2) {
//                     this.isEaten = true;
//                     console.log(`The animal ${this.name} ate the ${food.name}`)
//                 } else {
//                     console.log(`The animal ${this.name} tried to eat ${food.name}, but it was too large.`)
//                 }       
//             }
//         } else {
//             console.log(`The animal ${this.name} is eating ${food}.`)
//         }
//     }
// }

// let lion = new Animal('lion', 'carnivore', 2, 40);
// let elephant = new Animal('elephant', 'herbivore', 1, 400);
// let mouse = new Animal('mouse', 'omnivore', 0.5, 1)

// lion.eat('burger');
// lion.eat(mouse)
// lion.eat(elephant)
// elephant.eat(lion)
// elephant.eat(mouse)
// elephant.eat('toast')
// mouse.eat(lion)
// mouse.eat(elephant)
// mouse.eat('cheese')

// let john = new Animal('john', 'cadkjahkdasrnivore', 10, 100)