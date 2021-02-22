// Callbacks

// Simple

// const simple = () => {
//     setTimeout(() => {
//         console.log('First log, waiting for the second one.')
//         setTimeout(() => {
//             console.log('Second log')
//         }, 1000)
//     }, 2000)
// }

// simple();

// Complex - CALLBACK HELL

// const complex = () => {
//   setTimeout(() => {
//     console.log("1. First thing, preparing for the second");
//     setTimeout(() => {
//       console.log("2. Second thing, preparing for the third");
//       setTimeout(() => {
//         console.log("3. Third thing, preparing for the forth");
//         setTimeout(() => {
//           console.log("4. Forth thing, preparing for the fifth");
//           setTimeout(() => {
//             console.log("5. Fifth thing, preparing for the Sixth");
//             setTimeout(() => {
//               console.log("6. Sixth and last thing");
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// };

// complex();

// [Promise]
// States:
// Pending
// Fulfilled
// Rejected

const first = workTime => {
    return new Promise((resolve, reject) => {
        if (workTime <= 0) {
            reject(`It's too short of a work time. Please try again`);
        }
        setTimeout(() => {
            resolve('First log, preparing for the second one');
        }, workTime)
    })
}

const second = () => console.log('Second log');

first(-4)
    .then(success => {
        console.log('SUCCESS: ', success)
        second()
    })
    .catch(error => {
        console.log('ERROR', error)
    })
    .finally(() => {
        console.log(`Logging done at ${new Date()}`)
    })

