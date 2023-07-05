//cjs: var generateName = require('sillyname');
import generateName from "sillyname";
import superheroes from 'superheroes'

var sillyName = generateName();
var name = superheroes.random();

console.log(`Random super hero name is ${name}`);
console.log(`My name is ${sillyName}`);