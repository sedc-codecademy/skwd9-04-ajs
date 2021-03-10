import { Component } from '@angular/core';
import { Car, myName, functionWithParameters, ExtraFeatures, ExtraFeaturesTwo } from './file';

@Component({
    selector: 'app-type-script-demo',
    template: `
                <h2>Hello from angular {{angularVersion}} application!</h2>
                <button (click)="changeAngularVersion()" >click me</button>
                <input type="text" (input)="functionWithInput($event)" />

                <div *ngIf="shouldRender">
                    <p *ngFor="let number of numbers">{{number * 5}}</p>
                </div>

              `,
    styles: ["h2 {color: red;}"]
})
export class TypeScriptDemoComponent extends ExtraFeatures implements ExtraFeaturesTwo {

    angularVersion:number = 9

    numbers: Array<number> = [1,2,3,4,5,6,7,8,9]

    shouldRender: boolean = true

    changeAngularVersion(): void {
        this.angularVersion++
        console.log(myName)
        let newCar = new Car() 
        newCar.name = "a5"
        newCar.fuelType = "diesel"
        console.log(newCar)

        console.log(functionWithParameters(5, 10))

        this.shouldRender === true ? this.shouldRender = false : this.shouldRender = true

        this.triggerExtraFeatureOne()
        this.triggerExtraFeatureTwo()
    }

    functionWithInput(event) {
        console.log(event.target.value)
    }

    triggerExtraFeatureTwo() {
        console.log("extra feature 2 triggered")
    }




}