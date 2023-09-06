function solucao(numeros) {
    // seu codigo aqui

    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }

    let distribuicao = 0
    let posicao = 0
    i = 0

    while (distribuicao !== soma) {
        if (i < numeros.length) {
            posicao = i + 1
            distribuicao++
            i++
        } else if (i >= numeros.length) {
            i = 1
            posicao = 1
            distribuicao++
        }
    }

    console.log(posicao)

}