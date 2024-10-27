let a = 5;
let b = 10;

console.log(`До обмена: a = ${a}, b = ${b}`);

a = a + b; 
b = a - b;
a = a - b; 

console.log(`После обмена: a = ${a}, b = ${b}`);