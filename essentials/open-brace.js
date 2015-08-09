// Javascript has automatic semicolon insertion mechanism
function func() {
  return
  {
    name : "Batman"
  };
}
console.log(func());

// correct
function correctFunc() {
  return {
    name : "Batman"
  };
}
console.log(correctFunc());
