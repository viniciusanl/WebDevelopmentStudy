function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')

//_______________________________________________________________________

console.log("___________________________________________________________")

//_______________________________________________________________________

function teste(min, max) {
    const valor = Math.random() * (min - max) + min
    return Math.ceil(valor)
}

let x = 0

while (x != -1) {
    x = teste(-1, 5)
    console.log("-> ", x)
}
console.log("Acabou...")