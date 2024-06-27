console.log("Start of script");

setTimeout(() => {
    console.log("setTimeout 0ms");
}, 0);

const promise = new Promise((resolve, reject) => {
    console.log("Promise created");
    resolve("Promise resolved");
});

promise.then((message) => {
    console.log(message);
});

console.log("End of script");
