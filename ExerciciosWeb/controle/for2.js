const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// Colocar a variável como Let para que ele possa permanecer somente nesse escopo
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// Determinar variável como Let novamente
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}