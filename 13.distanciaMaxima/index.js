function processData(input) {
    //Enter your code here

    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0], 10);

    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: (coord[0]),
            y: (coord[1]),
        })
    }

    let distanciaEntrePontos = 0
    let maiorDistancia = 0

    for (let i = n - 1; i >= 0; i--) {
        let k = 0
        while (k >= 0 && k < i) {
            distanciaEntrePontos = ((((coordenadas[i].x - coordenadas[k].x) ** 2) + ((coordenadas[i].y - coordenadas[k].y) ** 2)) ** 0.5)
            k++
            if (distanciaEntrePontos > maiorDistancia) {
                maiorDistancia = distanciaEntrePontos
            }
        }
    }

    console.log(maiorDistancia)


} 