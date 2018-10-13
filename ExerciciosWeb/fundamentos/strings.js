const escola = "Cod3r"

//charAt = Retorna a letra que esta no indice informado da String.

/*
 *Não gera um erro se digitar um indice maior que a quantidade de indice da String.
 *Porem, não será imprimido nenhum valor, pois o indice está vazio.
 */
console.log(escola.charAt(3))
console.log(escola.charAt(5))

// charCodeAt = Pega o valor do indice na tabela ASCII.
console.log(escola.charCodeAt(2))

// indexOf = Pesquisa o valor informado na String e retorna em qual indice ele se encontra.
console.log(escola.indexOf("r"))

/*
 * substring = Percorre a String a partir do indice informado.
 * OBS: Tambem pode percorrer a String delimitando os indices.
 */
console.log(escola.substring(1))
console.log(escola.substring(1, 4))

// concat = Concatenar a String. O operador + em uma String realiza a Concatenação
console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")

// replace = Altera o valor do indice informado na String pelo valor informado.
console.log(escola.replace(3, "e"))

// split = Converte a String em Array / Passar o separador para gerar o Array
console.log("Vinicius, Amanda, Kiane".split(","))