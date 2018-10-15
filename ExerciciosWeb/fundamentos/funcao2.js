// Armazenamento de uma função em uma variável
const imprimeSoma = function(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3)

// Armazenando uma função arrow em uma variável
// Simbolo => é uma Arrow function

const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 3))

// Função com retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(1, 5))