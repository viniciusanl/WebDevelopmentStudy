/*
 * Notação literal de objetos
 * Objeto é diferente de Json
 */
const prod1 = {}
prod1.nome = "Smartphone"
prod1.preco = "2199.99"
prod1["Desconto Legal"] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 80.00,
    obj: {
        nome: "Teste"
    }
}

console.log(prod2)