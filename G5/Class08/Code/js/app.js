function simple() {
    setTimeout(() => {
        console.log("1. First thing preparing for second.");
        setTimeout(() => {
            secondThing();
        }, 2000)
    }, 2000)
}

function secondThing() {
    console.log('2. Second thing.');
}

// simple();


function complex() {
    setTimeout(() => {
        console.log('1. First thing preparing for second.');
        setTimeout(() => {
            console.log('2. Second thing preparing for third.');
            setTimeout(() => {
                console.log('3. Third thing preparing for fourth.')
                setTimeout(() => {
                    console.log('4. Fourth thing preparing for fifth.');
                    setTimeout(() => {
                        console.log('5. Fifth thing preparing for sixth.');
                        setTimeout(() => {
                            console.log('6. Sixth thing and last thing!');
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000);
}

// complex();


function first(workTime) {
    return new Promise((resolve, reject) => {
        if(workTime <= 0) {
            reject('The working time must be greater than zero!');
        }
        else {
            setTimeout(() => {
                resolve('First thing preparing for second.');
            }, workTime)
        }
    })
}

function second() {
    console.log('Second thing executed!');
}


// first(1000)
// .then(data => {
//     console.log('We get the data!');
//     console.log(data);
//     second();
// })
// .catch(err => {
//     console.log('ERROR: ' + err);
// })
// .finally(() => console.log(`Everything is done in ${Math.round(performance.now())} ms`));



isParentHappy = true;

let willIGetNewPhone = new Promise((resolve, reject) => {
    if(isParentHappy) {
        let phone = {
            brand: 'Samsung',
            color: 'Perl white'
        }
        resolve(phone);
    } else {
        let reason = 'Parent is not happy :(';
        reject(reason);
    }
})

let showOff = (phone) => {
    let message = 'Hey friend I have a new ' + phone.brand;
    return Promise.resolve(message);
}

let friendCryForNewPhone = () => {
    let message = 'Heey! My friend just got new Samsung phone! I want Samsung as well!';
    return Promise.resolve(message);
}

let askParent = () => {
    willIGetNewPhone
    .then(data => {
        console.log('My promise is fulfilled');
        // console.log(data);
        return showOff(data);
    })
    .then(message => {
        console.log(message);
        return friendCryForNewPhone();
    })
    .then(cryMessage => {
        console.log(cryMessage);
    })
    .catch(err => {
        console.log('Unfortunately ' + err);
    })
}

askParent();


