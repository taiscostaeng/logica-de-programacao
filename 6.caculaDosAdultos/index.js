function solucao(lista) {
    // seu codigo aqui

    let maiorDeIdade = lista.filter((idade) => {
        return idade >= 18
    })

    let jovem = maiorDeIdade[0]

    if (maiorDeIdade.length == 0) {
        console.log("CRESCA E APARECA")
    } else {
        for (let i = 1; i < maiorDeIdade.length; i++) {
            if (maiorDeIdade[i] <= jovem) {
                jovem = maiorDeIdade[i]
            }
        } console.log(jovem)
    }



}