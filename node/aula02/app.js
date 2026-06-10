const multiply = require('./mod');
const path = require('path')

console.log(multiply(2,4));
console.log(__filename);
console.log(__dirname);
console.log(path.resolve(__dirname));

