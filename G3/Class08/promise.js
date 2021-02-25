function first(worktime) {
    return new Promise((resolve, reject) => {
        if (worktime <= 100) {
            reject("It's to short of a work time. Please try again!");
        }
        setTimeout(() => {
            resolve("First thing, preparing for second");
        }, worktime);
    });
}

first(1000)
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(`ERROR: ${error}`))
    .finally(() => console.log(`Everything is done at: ${new Date()}`));