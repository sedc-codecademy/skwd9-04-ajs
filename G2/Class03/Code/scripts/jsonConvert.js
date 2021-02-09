let someObject = {
  trainer: "Trainer name",
  assistant: "Assistant name",
  students: [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg"
  ],
  academy: "Code"
};

//serialization (get JSON string)
let jsonString = JSON.stringify(someObject);
console.log(`Json string: ${jsonString}`);

//parsing - deserialization
let jsObject = JSON.parse(jsonString);
console.log(`Js object:`);
console.log(jsObject);
