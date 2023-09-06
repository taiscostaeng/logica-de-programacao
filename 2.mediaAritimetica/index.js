function solucao(lista) {
    //seu codigo aqui

    let soma = 0

    for (i = 0; i < lista.length; i++) {
        soma = soma + lista[i]
    }

    let media = soma / lista.length
    console.log(media)

}