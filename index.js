console.log("hello world");

let a = 5;
let b = 7;
const x = a + b;
a += 1;
b -= 5;

console.log(a, b); //6 2
console.log(x); //12

const min = a - b; // 6-2=4
const max = b ** a; //2^6=64
b += 2;
const mod = a % b; //6%4=2
console.log(min, max, mod);

let num1 = 1;
let num2 = ++num1;
console.log(num1, num2) //2 2

num1 = 1;
num2 = num1++;
console.log(num1, num2) //2 1

let abc123 = 20;
abc123 -= abc123 - 10;
console.log(abc123); //10
