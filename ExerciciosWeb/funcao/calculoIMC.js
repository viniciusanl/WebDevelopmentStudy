const massa = (altura, peso) => {
    imc = peso / (altura * altura)
    if (imc < 15) {
        console.log("Extremamente abaixo do peso - IMC: ", imc)
    } else if (imc >= 15 && imc < 16) {
        console.log("Gravemente abaixo do peso - IMC: ", imc)
    } else if (imc >= 16 && imc < 18.5) {
        console.log("Abaixo do peso ideal - IMC: ", imc)
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Faixa de peso ideal - IMC: ", imc)
    } else if (imc >= 25 && imc < 30) {
        console.log("Sobrepeso - IMC: ", imc)
    } else if (imc >= 30 && imc < 35) {
        console.log("Obesidade grau I - IMC: ", imc)
    } else if (imc >= 35 && imc < 40) {
        console.log("Obesidade grau II (Grave) - IMC: ", imc)
    } else if (imc >= 40) {
        console.log("Obesidade grau III (Mórbida) - IMC: ", imc)
    }
}


massa(1.85, 85)
massa(1.65, 90)