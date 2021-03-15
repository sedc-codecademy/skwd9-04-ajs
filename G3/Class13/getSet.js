let date = new Date(1233312331321).getFullYear();
console.log(date);

// 1233312331321;

// "12/01/1988";

class DateOfBirth {
    constructor(seconds) {
        this.date = seconds;
    }

    get date() {
        console.log("Get");
        return new Date(this._date).getFullYear();
    }

    set date(newSeconds) {
        console.log("Set");
        if (!newSeconds) {
            this._date = 0;
            //one way of doing set
            //throw new Error("Must contain valid value");
        } else {
            this._date = newSeconds;
        }
    }
}

// let dob = new DateOfBirth(1233312331321);

// console.log(dob.date);

// let dob1 = new DateOfBirth();
// console.log(dob1.date);