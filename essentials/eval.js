// It is not recommended to use eval and Function with
// Javascript string

//antipattern
var obj = {name : 'test'};
var property = 'name';
console.log(eval("obj." + property));

// perferred
console.log(obj['name']);

// code evaluated by Function will be running in a local function scope
(function(){
  var local = 1;
  eval("local = 3; console.log(local)"); // log 3
  console.log(local); // log 3
}());


(function() {
  var local = 1;
  Function("console.log(typeof local);")(); // logs undefined
}());
