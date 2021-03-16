let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('The promise is resolved');
    }, 3000)
})
console.log(promise);



const printName = (name) => {
    return new Promise((resolve, reject) => {
        if(name) {
            setTimeout(() => {
                resolve(`Successfully resolved with result: ${name}`);
            }, 2000)
        }else {
            reject(name);
        }
    })
}

// printName('John Doe')
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log('Ooops! Something went wrong! Please contact support@sedc.com. Message:' + err);
// });




// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log('Ooops! Something went wrong! Please contact support@sedc.com. Message:' + err);
// })
// .finally(() => console.log(`The API request finished in ${Math.round(performance.now())} ms`));


const getUsers = (url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                resolve(data);
            },
            error: function(err) {
                reject(err);
            }
        })
    })
}

const printUsers = (users) => {
    for (const user of users) {
        console.log(user);
    }
}

getUsers('https://jsonplaceholder.typicode.com/users')
.then(res => {
    const users = res;
    let filteredUsers = users
                        .map(user => ({...user,  age: Math.floor((Math.random() * 31) + 20)}))
                        .filter(user => user.age < 25);
   
    // let filteredUsers = mappedUsers.filter(user => user.age < 25)
    // printUsers(mappedUsers);
    console.log("==========================")
    printUsers(filteredUsers);
})
.catch(err => console.log(err));