// const
const hello = "world";
console.log(hello);

const arr = [];
arr.push(1);
console.log(arr);


// var
// auto-initialize var foo
console.log(foo); // value:undefined

var foo = "foo";
console.log(foo);
foo = "bar";

if (true) {
    var a = 1;
}
console.log(a); // 1


// let - ES6
let bar = "bar";
console.log(bar);
bar = "baz";
if (true) {
    let b = 2;
}
console.log(b) // error