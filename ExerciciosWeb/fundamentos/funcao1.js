// Função sem  retorno

function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimeSoma(2) // O segundo parâmetro ficou como Undefined, o resultado é um NaN
imprimeSoma(2, 50, 4, 6)
imprimeSoma() // Nao tem nenhum parâmetro, os dois ficaram como undefined

function soma(a, b = 0) // Tratamento do parâmetro, quando necessita de valores fixos
{
    return a + b
}

console.log(soma(2, 3)) // Porem, posso alterar o valor do parâmetro no decorrer do código
console.log(soma(2))
console.log(soma())