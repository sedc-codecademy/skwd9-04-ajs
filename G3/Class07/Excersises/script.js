let stopWatch = {
    time: 0,
    intValId: null,

    start: function () {
        this.intValId = setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
    },
    stop: function () {
        clearInterval(this.intValId);
        this.intValId = null;
    },
    reset: function () {
        if (this.intValId) {
            clearInterval(this.intValId);
            this.intValId = null;
            this.time = 0;
        }
        this.time = 0;
    }
}

// document.getElementById().addEventListener("", () => {
//     stopWatch.start();
// })

//00:00
console.log("Start first time");
stopWatch.start();

// 00:05
setTimeout(() => {
    console.log("Stop first time");
    stopWatch.stop();
}, 5000);

// 00:08
setTimeout(() => {
    console.log("Start second time");
    stopWatch.start();
}, 8000);

// 00:10
setTimeout(() => {
    console.log("Reset first time");
    stopWatch.reset();
}, 10000);

// 00:12
setTimeout(() => {
    console.log("Start last time");
    stopWatch.start();
}, 12000)
