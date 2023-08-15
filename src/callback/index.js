function suma(a, b) {
    return a + b;
}

function calc(a,b,callback){
    return callback(a,b)
}

console.log(calc(2,2,suma))

setTimeout(function(){
    console.log("Hola javascript")
},10000)

function greeting(name) {
    console.log("hola ",name)
}

setTimeout(greeting,5000,"Daniel")

//Calculadora ejemplo //
function sumar(a,b){
    return a+b;
}

function restar(a,b) {
    return a-b;
}

function multiplicar(a,b) {
    return a*b;
}

function operacion(a,b,callback){
    return callback(a,b)
}

setTimeout(function(){
    console.log(operacion(2,2,restar))
},5000)


window.setTimeout(function () {
    console.log("hola mundo")
  },2000)