function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(1)(2)(3));

const add2 = add(2);
const add2And3 = add2(3);
console.log(add2And3(4));
