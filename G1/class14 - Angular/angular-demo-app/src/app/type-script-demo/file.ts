export let myName: string = "Viktor";

export class Car {
    name: string
    fuelType: string
    hasAc: boolean
    horsePower: number
    owner?: User

    Drive(): void {
        console.log("driving!")
    }

    Info(): string {
        return "some random info"
    }
}

class User {
    name: string
}

let listOfStrings: Array<string> = ["Viktor", "Igor"]
let listOfUsers: Array<User>

export function functionWithParameters(number1: number, number2: number): number {
    return number1 + number2;
}


export class ExtraFeatures {
    triggerExtraFeatureOne() {
        console.log("extra feature 1 triggered")
    }
}

export interface ExtraFeaturesTwo {
    triggerExtraFeatureTwo() 
}

// console.log(myName)

