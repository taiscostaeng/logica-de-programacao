function solucao(jogadores) {
    //seu codigo aqui


    let arrayDeZeros = []
    let arrayDeUm = []
    let a = 0
    let b = 0

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada == 0) {
            arrayDeZeros[a] = jogadores[i].jogada
            a++
        } else {
            arrayDeUm[b] = jogadores[i].jogada
            b++
        }
    }

    if (arrayDeZeros.length === 1) {
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada == 0) {
                console.log(jogadores[i].nome)
            }
        }
    } else if (arrayDeUm.length === 1) {
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada == 1) {
                console.log(jogadores[i].nome)
            }
        }
    } else if (arrayDeUm.length > 1 || arrayDeZeros.length > 1) {
        console.log("NINGUEM")
    }

}