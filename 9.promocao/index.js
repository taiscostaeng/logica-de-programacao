function solucao(precos) {
    //seu codigo aqui

    let maisBarato = 10000000000000000000000000000
    let valorDaCompraSemDesconto = 0

    if (precos.length >= 3) {
        for (i = 0; i < precos.length; i++) {
            if (precos[i] < maisBarato) {
                maisBarato = precos[i]
            } valorDaCompraSemDesconto = valorDaCompraSemDesconto + precos[i]
        }
        let desconto = maisBarato * 0.5
        let valorDaCompraComDesconto = (valorDaCompraSemDesconto - maisBarato) + desconto
        console.log(valorDaCompraComDesconto)
    } else {
        for (i = 0; i < precos.length; i++) {
            valorDaCompraSemDesconto = valorDaCompraSemDesconto + precos[i]
        } console.log(valorDaCompraSemDesconto)
    }

}
