// undefined = Variável que foi definida mas nao inicializada
let valor
console.log(valor)

// null = Ausência de valores
valor = null
console.log(valor)

const produto = {}
console.log(produto)

produto.preco = 4.00
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
    //delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)

console.log(produto)

// Teste
if (produto.preco == null) {
    console.log("Teste1")
} else {
    console.log("Teste2")
}