const helloWorld: string = 'Hello World';

console.log(helloWorld);

interface Animal {
    name: string;
    age: number;
    children: Animal[];
    colors?: string[];
    hasTail: boolean;
}

const sparky: Animal = {
    name: 'Sparky',
    age: 5,
    children: [],
    hasTail: true,
}

console.log(sparky);


enum Side {
    left,
    right,
    top,
    bottom
}

console.log(Side.left)

const id: number | string = 1;