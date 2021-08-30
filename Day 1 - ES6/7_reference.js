console.log(1 === 1);
console.log("hello" === 'hello');

console.log({} === {});

// Primitive data type: string, number, boolean, null, undefined.
// Reference data type: object (including array, function).

let x = {};
let y = x;
console.log(x === y);
x.name = "MindX";
console.log(y);


const t = {};
const z = {};
console.log(t === z);
t.name = "MindX";
console.log(z);