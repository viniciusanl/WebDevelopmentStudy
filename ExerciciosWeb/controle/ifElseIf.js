Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimeResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log("Quadro de honra...")
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado...")
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação...")
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado...")
    } else {
        console.log("Nota inválida...")
    }
}

imprimeResultado(10)
imprimeResultado(8)
imprimeResultado(6)
imprimeResultado(3)
imprimeResultado(-1)