function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
            console.log(this.idade)
    }, 10)
}

new Pessoa