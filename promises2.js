let turnOnComputer = function() {
    return new Promise((resolve, reject) => {
        resolve('Computer is on');
    });
};

let openBrowser = function(msg) {
    return new Promise((resolve, reject) => {
        resolve(msg + ' - Open Browser');
    });
};

let gotoThisPage = function(msg) {
    return new Promise((resolve, reject) => {
        resolve(msg + ' - Go to google.com');
    });
};

turnOnComputer().then((result) => {
    return openBrowser(result);
}).then((result) => {
    return gotoThisPage(result);
}).then((result) => {
    console.log('We are DONE: ' + result);
});