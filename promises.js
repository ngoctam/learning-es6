// // synchronous
// fetch("http://google.com");
// hello("HELLO");
// console.log('John Doe');

// // asynchronous
// db.query("SELECT users", function(result) {
//     console.log(result);
// })
// console.log("something else");

// examples

let myPromise = new Promise(function(resolve, reject) {
    let isComplete = true;
    
    if(isComplete) {
        resolve("This is complete");
    } else {
        reject("This is not complete");
    }
});

myPromise.then(function(result) {
    console.log(result);
}, (error) => {
    console.log(error);
});

console.log('John Doe');