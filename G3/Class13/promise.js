function getData() {
    let time = Math.floor(Math.random() * 10000);
    return new Promise((resolve, reject) => {
        let isSuccsess = Math.random() < 0.9;
        setTimeout(() => {
            // without thernary
            if (isSuccsess) {
                resolve(JSON.stringify({ name: "Trajan", lastName: "Stevkovski" }));
            } else {
                reject("Cannot fetch data")
            }

            // isSuccsess ? resolve() : reject("Cannot fetch data"); // with thernary
        }, time);
    });
}

function parseStringIntoJson(str) {
    return new Promise((resolve, reject) => {
        if (str) {
            resolve(JSON.parse(str));
        } else {
            reject("Cannot parse data");
        }
    });
}

// let promise = getData();

// promise
//     .then(response => parseStringIntoJson(response))
//     .then(data => console.log(data))
//     .catch(error => console.log(error));



// let promiseArr = []; 
// for (let i = 0; i < 10; i++) {
//     promiseArr.push(getData());
// }


// Promise.all(promiseArr)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

