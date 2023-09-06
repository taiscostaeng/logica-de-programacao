function processData(input) {
    //Enter your code here

    const linhas = input.trim().split("\n");
    const senha = linhas[0];
    const digitado = linhas[1];

    let i = 0
    for (let n = 0; n <= digitado.length; n++) {
        if (n == digitado.length) {
            console.log("NAO")
            break
        }
        while (digitado[n] !== senha[i]) {
            if (n < digitado.length) {
                n++
            } else {
                console.log("NAO")
                break
            }
        } if (digitado[n] === senha[i]) {
            if (i < (senha.length - 1)) {
                i++
            } else {
                console.log("SIM")
                break
            }
        }
    }

} 