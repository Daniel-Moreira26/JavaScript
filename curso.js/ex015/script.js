function calcular() {
    var tabu = document.getElementById('tabuada')
    var res = document.getElementById('res')
    var tab = Number(tabu.value)

    if (tabu.value.length == 0 ) {
        res.innerText = '[INVÁLIDO] Deverá digitar um número!'
        tab = 0
    }
}