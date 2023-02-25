function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
       // msg.innerHTML = `Bom Dia!`
        img.src = 'manha-300.jpg'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18 ) {
        //msg.innerHTML = `Boa Tarde!`
        img.src = 'tarde-300.jpg'
        document.body.style.background = '#b9846f'

    } else {
       // msg.innerHTML = `Boa Noite!`
        img.src = 'noite-300.jpg'
        document.body.style.background = '#515154'
    }

}

