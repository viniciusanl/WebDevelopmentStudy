// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](5, 5))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return "Beleza" }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}
// Pode passar uma função ja existente ou criar uma nova
run(function() { console.log("Executar...") })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(5, 5)(10)

const valorMais = soma(5, 5)
valorMais(10)