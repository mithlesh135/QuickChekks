let arr = ['1','2','3'];

let result = Promise.resolve(false);
arr.forEach(item => {
    result = result.then((val) => {
        console.log(item);
        return checkPromise(item);
    });

    console.log(result);
});

function checkPromise(val) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('resolved');
            resolve(val);
        }, 1000)
    });
    return promise;
}