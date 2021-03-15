class Shape {
    constructor(name, color, position) {
        this.name = name;
        this.color = color;
        this.position = position;
    }
    set name(nameInput) {
        if (!nameInput) {
            console.log("You must enter name");
            return;
        }
        this._name = nameInput;
    }
    get name() {
        console.log("Getting name");
        return this._name;
    }
    set color(colorInput) {
        if (!colorInput) {
            console.log("You must enter color");
            return;
        }
        this._color = colorInput;
    }
    get color() {
        console.log("Getting color");
        return this._color;
    }
    getArea() {
        return "getArea has no concrete implementation";
    }
    getPerimeter() {
        return "getPerimeter has no concrete implementation";
    }
    checkPosition(shape) {
        if (shape instanceof Shape) {
            if (shape.x > this.x && shape.y > this.y) {
                console.log(`Shape ${shape.name} has larger x y coordinates`);
                return;
            }
            if (shape.x > this.x) {
                console.log(`Shape ${shape.name} has larger x coordinate`);
                return;
            }
            if (shape.y > this.y) {
                console.log(`Shape ${shape.name} has larger y coordinate`);
                return;
            }
            console.log(`Shape ${this.name} has larger x y coordinates`);

        }
        else {
            console.log("The input is not a Shape");
        }
    }
    static move(shape) {
        if (shape instanceof Shape) {
            console.log("Moving..");
            shape.position[0] = shape.position[0] + 5;
            shape.position[1] = shape.position[1] + 5;
        }
        else {
            console.log("The input is not instance of Shape");
        }
    }
}

class Rectangle extends Shape {
    constructor(name, color, position, sideA, sideB) {
        super(name, color, position);
        this.sideA = sideA;
        this.sideB = sideB
    }
    getArea() {
        return this.sideA * this.sideB;
    }
    getPerimeter() {
        return 2 * this.sideA + 2 * this.sideB;
    }
}

class Circle extends Shape {
    constructor(name, color, position, radius) {
        super(name, color, position);
        this.radius = radius;
        this.pi = 3.14;
    }
    getArea() {
        return this.radius * this.radius * this.pi;
    }
    getPerimeter() {
        return 2 * this.radius * this.pi;
    }
}

let shape = new Shape("triangle", "red", [2, 3]);
console.log(shape.getPerimeter());

let rectangle = new Rectangle("rectangle", "yellow", [5, 6], 2, 3);
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
Rectangle.move(rectangle);
console.log(rectangle.position);