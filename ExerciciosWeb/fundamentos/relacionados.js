// == é para comparação de igual
// === é para comparação de estritamente igual
// != se é diferente
// !== se é estritamente diferente

console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
    // getTime = Retorna um valor em milissegundos a partir da data selecionada
console.log('11)', d1.getTime() === d2.getTime())
    //console.log(d1.getTime())
    //console.log(d1.getDay())
    //console.log(d1.getHours())
    //console.log(d1)

console.log('12)', undefined == null)
console.log('13)', undefined === null)