function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

let anotherCounter = createCounter();

console.log(anotherCounter()); 
console.log(anotherCounter()); 