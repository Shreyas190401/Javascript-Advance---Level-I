function divide(x, y) {
    try {
        if (y === 0) {
            throw new Error('Division by zero');
        }
        return x / y;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
