
// Code showing how to force calling new when invoking a constructor
// NOTE: calling a constructor without new will have unforseeing consequences
// this will pointing to global object instead
function MyConstructor() {
  if (!(this instanceof MyConstructor)) {
    return new MyConstructor();
  }

  this.thing = "constructor";
}

var first = new MyConstructor();
var second = MyConstructor();

console.log(first.thing);
console.log(second.thing);
