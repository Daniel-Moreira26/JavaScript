function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
        //alert('[ERRO] Faltam dados a serem preenchidos!')
        
    } else {
        res.innerHTML = 'contando...  '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) { 
            //contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerText += `${c}  👉`
            }
        } else {
            //contagem decrescente
            for(var c = i; c >= f; c -= p) {
                res.innerText += `${c}  👉`
            }
        
        }

    }   
    res.innerHTML += `🏁`
}