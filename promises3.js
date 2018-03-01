let turnOnComputer = function() {
    return new Promise((resolve, reject) => {
        resolve('FIRST ONE FAILED');
    });
};

let openBrowser = function(msg) {
    return new Promise((resolve, reject) => {
        resolve('WHAT????');
    });
};

let gotoThisPage = function(msg) {
    return new Promise((resolve, reject) => {
        resolve(msg + " Cannot visit page - ");
    });
};

// turnOnComputer().then((result) => {
//     return openBrowser(result);
// }, (error) => {
//     console.log(error);
// }).then((result) => {
//     console.log("SECOND ONE");
// }, (error) => {
//     console.log(error);    
// }).then((result) => {
//     console.log("THIRD ONE");
// }).catch((e) => {
//     console.log(e);
// });

Promise.all([turnOnComputer(), openBrowser(), gotoThisPage()]).then(function() {
    console.log("DONE");
});