let source = {
    name: "root",
    weight: 10,
    children: [
        {
            name: "one",
            weight: 1,
            children: [
                {
                    name: "one-one",
                    weight: 11,
                    children: [
                        {
                            name: "one-one-one",
                            weight: 111,
                            children: []
                        },
                        {
                            name: "one-one-two",
                            weight: 112,
                            children: []
                        },
                        {
                            name: "one-one-three",
                            weight: 113,
                            children: []
                        }
                    ]
                },
                {
                    name: "one-two",
                    weight: 12,
                    children: [{
                        name: "one-two-one",
                        weight: 121,
                        children: [
                            {
                                name: "one-two-one-one",
                                weight: 1211,
                                children: []
                            },
                            {
                                name: "one-two-one-two",
                                weight: 1212,
                                children: []
                            },
                            {
                                name: "one-two-one-three",
                                weight: 1213,
                                children: [
                                    {
                                    name: "one-two-one-three-one",
                                    weight: 12131,
                                    children: []
                                    }
                                ]
                            }
                        ]
                    }]
                }
            ]
        },
        {
            name: "two",
            weight: 2,
            children: [
                {
                    name: "two-one",
                    weight: 21,
                    children: []
                },
                {
                    name: "two-two",
                    weight: 22,
                    children: []
                }
            ]
        }
    ]
}

function getWeight(node) {
    console.log(node.name);
    let totalWeight = node.weight;
    for (let child of node.children) {
        totalWeight += getWeight(child);
    }
    return totalWeight; 
}

console.log(`Total weight is ${getWeight(source)}`);