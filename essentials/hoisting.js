var globalVar = 10;

// hoisting means the definetion of local variable will be move to the beginning 
// of a function
function test() {
  console.log(globalVar);
  var globalVar = 20;
  console.log(globalVar);
}

test();
