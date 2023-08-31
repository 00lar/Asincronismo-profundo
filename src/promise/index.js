const promise = new Promise(function(resolve,reject) {
    resolve ('hey1!')
})
const cows = 15;
const CountCows = new Promise(function(resolve, reject){
    if (cows > 10) {
        resolve("we have " + cows)
    }
        else {
            reject("No hay vacas en la granja")
        }    
})

CountCows.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error)
}).finally(() => console.log("Finally"));