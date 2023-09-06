
function solucao(min, max, valores) {
    //seu codigo aqui

    const novoArray = valores.filter((elementoAtual) => {
        return elementoAtual >= min && elementoAtual <= max
    })

    console.log(novoArray)

}
