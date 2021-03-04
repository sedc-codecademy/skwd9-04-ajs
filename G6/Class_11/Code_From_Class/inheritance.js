

function Vehicle (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.company = "G6";
    this.printVehicle = function() {
        console.log(`${this.id}. ${this.name}, ${this.price}`);
    }
}

let wheeledVehicle = Object.create(new Vehicle(1, "Mercedes", 1000000));
wheeledVehicle.drive = function() {
    console.log("BRMMMMMMMMM......");
};

let car = Object.create(wheeledVehicle);

car.fuelTank = 32;

car.printVehicle();
car.drive();