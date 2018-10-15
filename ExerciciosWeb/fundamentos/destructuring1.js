const pessoa = {
    nome: "Vinicius",
    idade: 24,
    endereco: {
        lagradouro: "Rua Muito Bom",
        numero: 2620
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, teste = true } = pessoa
console.log(sobrenome, teste)

const { endereco: { lagradouro, numero, cep } } = pessoa
console.log(lagradouro, numero, cep)

//const { conta: { ag, numero } } = pessoa
//console.log(ag, numero)