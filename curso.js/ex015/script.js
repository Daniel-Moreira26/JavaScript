function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0 ) {
        res.innerText = '[INVÁLIDO] Deverá digitar um número!'
        tab = 0
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' // para limpar a tabuada antes de ir para outra

        while (c <= 10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
        }
    }
}