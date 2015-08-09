// depending on the input value, Object constructor return different
// objects

// all code below are antipattern
var o = new Object();
console.log(o.constructor === Object); // true;

// number object
var o = new Object(1);
console.log(o.constructor === Number); // true;
console.log(o.toFixed(2)); // 1.00

// string object
var o = new Object("I am a string");
console.log(o.constructor === String); // true;
console.log(typeof o.substring); // function

// boolean object
var o = new Object(true);
console.log(o.constructor === Boolean); // true;
