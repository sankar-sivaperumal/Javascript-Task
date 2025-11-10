// Swap number
function Swap(){
let a = 5, b = 10;
console.log("Before Swap: a =", a, ", b =", b);
a = a + b;
b = a - b;
a = a - b;
console.log("After Swap: a =", a, ", b =", b);
}
Swap()