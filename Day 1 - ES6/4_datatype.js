const str = "string";
const num = 1;
const bool = true;
const nullValue = null;
const undefinedValue = undefined;

console.log("1" == 1); //true
console.log("0" == true); //true

// falsy value
const falsyValues = [false, 0, "", null, undefined];

console.log("1" === 1); //false
console.log("" === false); //false

// array,function
const obj = {};