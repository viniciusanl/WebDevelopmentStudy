// Usar a notação ponto para acessar atributos publicos 
// Usar o this com a notação ponto para criar atributos e funções que ficarão visiveis

console.log(Math.ceil(6.5))
const obj1 = {}

obj1.nome = "Bola"
    //obj1["nome"] = "Bola2"
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")

console.log(obj2.nome)
console.log(obj3.nome)