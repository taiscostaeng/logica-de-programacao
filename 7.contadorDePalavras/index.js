function solucao(texto) {
    // Seu codigo aqui

    let arrayDeTexto = (texto.trim()).split(" ")
    let novoArray = []

    for (let i = 0; i < arrayDeTexto.length; i++) {
        if (arrayDeTexto[i] !== '') {
            novoArray.push(arrayDeTexto[i])
        }
    }

    console.log(novoArray.length)

}

function processData(input) {
    solucao(input)
} 