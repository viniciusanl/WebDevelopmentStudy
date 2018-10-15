// par Nome/Valor

const saudacao = "Opa" // contexto léxico 1

function exec() {
    const saudacao = "Fala" //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Vinicius",
    idade: 24,
    peso: 83,
    endereco: {
        lagradouro: "Rua Muito Legal",
        numero: 260,
        bairro: "Teste"
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)