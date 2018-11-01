const fabricante = ["Mercedes", "Audi", "BMW", "Honda", "Yamaha", "Kawasaki"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//Função Callback = Similar a recursividade

fabricante.forEach(imprimir)