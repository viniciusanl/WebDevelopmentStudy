const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 50

console.log(valores)

// length = Conta quantos elementos tem no Array
console.log(valores.length)

// push = Adiciona novos elementos no array
valores.push({ id: 5 }, null, false, "teste")
console.log(valores)

// pop = Deleta o ultimo valor do Array
console.log(valores.pop())

// delete = Deleta valores dentro do Array
delete valores[0]
console.log(valores)

// typeof = Mostra o tipo da sintaxe digitada
console.log(typeof valores)