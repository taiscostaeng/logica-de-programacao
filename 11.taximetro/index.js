

function solucao(min, km) {
    //seu codigo aqui

    let valorAPagar = 0


    if (min <= 20 && km <= 10) {
        valorAPagar = min * 50 + km * 70
    } else if (min > 20 && km > 10) {
        valorAPagar = 20 * 50 + (min - 20) * 30 + 10 * 70 + (km - 10) * 50
    } else if (km > 10) {
        valorAPagar = min * 50 + 10 * 70 + (km - 10) * 50
    } else if (min > 20) {
        valorAPagar = 20 * 50 + (min - 20) * 30 + km * 70
    }
    console.log(valorAPagar.toFixed(0))

}
