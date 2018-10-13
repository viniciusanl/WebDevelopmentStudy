var a = 3
let b = 50
const c = 500

console.log(a, b, c)

// typeof = mostra o tipo de dados de uma variável
console.log(typeof a)

const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.878
const avaliacao2 = 8.787

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(total)
console.log(media)

// toFixed = Controle sobre casas decimais
console.log(media.toFixed(3))

// toString = Converte o valor para String
console.log(media.toString(2))
console.log(typeof media)