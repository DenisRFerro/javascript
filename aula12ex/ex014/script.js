function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 0 && hora <12) {
        msg.innerHTML= `Bom Dia Agora são ${hora} horas! `
        img.src = 'manha.png'
        document.body.style.background = '#BF9411'
    } else if (hora >= 12 && hora <18) {
        msg.innerHTML = `Boa Tarde Agora são ${hora} horas! `
        img.src = 'tarde.png'
        document.body.style.background = '#B07854'
    } else {
        msg.innerHTML = `Boa Noite Agora são ${hora} horas! `
        img.src = 'noite.png'
        document.body.style.background = '#141F29'
    }


    
}