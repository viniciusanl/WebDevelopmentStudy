console.log(soma(10, 50))

// Function Declaration
function soma(x, y){
    return x + y
}

// Function Express
const sub = function (x, y) {
    return x - y
}
console.log(sub(10, 50))

// Named Function Express
const mult = function mult(x, y){
    return x * y
}
console.log(mult(10, 50))

// Teste
const div = function (a, b){
    return a / b
}

console.log(div(50, 5))

const teste = function (x, y){
    return (x + y)/2
}

console.log(teste(2, 2))

function mostra(texto) {
    console.log(texto + "<br></br>")
}
mostra("Usando função para melhorar o codigo")