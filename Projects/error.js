
function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}

try {
    console.log(divide(7, 1)); 
    console.log(divide(5, 0));
   
} catch (err) {
    console.error(err.message);
}
