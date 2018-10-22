// arguments = Um array interno da função
// Pode declarar uma função sem receber parâmetros e usar o arguments para receber
// parâmetros dentro da função

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))