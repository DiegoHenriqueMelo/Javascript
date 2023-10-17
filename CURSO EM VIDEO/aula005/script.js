function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 8 && hora < 12){
        document.body.style.background = 'lightgreen'
        img.src = 'img001.png'
    } else if (hora >= 12 && hora < 18){
        img.src = 'img002.png'
        document.body.style.background = 'orange'
    } else {
        document.body.style.background = 'darkblue'
        img.src = 'img003.png'

    }
}   

