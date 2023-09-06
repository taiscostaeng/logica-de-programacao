function processData(input) {
    //Enter your code here
    let i = 1
    if (input[0] === input[0].toLowerCase()) {
        while (i < input.length && input[i] === input[i].toUpperCase()) {
            i++
        } if (i < input.length) {
            console.log(input)
        } else {
            let novaPalavra = input.toLowerCase()
            novaPalavra = novaPalavra.replace(novaPalavra[0], novaPalavra[0].toUpperCase())
            console.log(novaPalavra)
        }
    } else {
        while (i < input.length && input[i] === input[i].toUpperCase()) {
            i++
        } if (i < input.length) {
            console.log(input)
        } else {
            console.log(input.toLowerCase())
        }
    }


} 