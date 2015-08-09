// prefer object literal than new Object() constructor
var car = {
  goes : "far"
};

// antipattern
// using literals as opposed to the Object constructor is that there
// is no scope resolution
var car = new Object();
car.goes = 'far';
