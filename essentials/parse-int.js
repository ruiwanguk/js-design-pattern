var month = '06';
var year = '09';

month = parseInt(month);
// parseInt should inlucde radix parameter
year = parseInt(year, 10);

console.log(month);
console.log(year);

var num = Number('08');
console.log(num);

// parseInt can process none number string
console.log(parseInt('08 hello'));
// Number cannot process none number string
console.log(Number('08 hello'));
