function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e digite novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'bebe-homem250.jpg')

            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem250.jpg')
                

            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto250.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'velho-homem250.jpg')

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'bebemulher250.jpg')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher250.jpg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'mulher-adulta250.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'velha-mulher250.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `É um(a) ${genero} de ${idade} anos` 
        res.appendChild(img)

        
    }
}