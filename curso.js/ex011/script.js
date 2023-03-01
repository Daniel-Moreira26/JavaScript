function clicar() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var msg = document.getElementById('mensagem')
    
    msg.innerHTML = `São ${hora}:${min} horas`
    msg.style.textAlign = 'center'
}
