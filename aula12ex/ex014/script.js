function horas(){
    const msg = document.querySelector('.msg')
    const img = document.querySelector('#img')
    const data = new Date()
    const hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=0 && hora <= 12){
        img.src = 'manhã.jpg'
        document.body.style.backgroundColor = 'lightblue'
        msg.innerHTML = `Agora são ${hora} horas da manhã`
    } else if (hora >= 13 && hora <=18){
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = 'rgb(254, 202, 114)'
        msg.innerHTML = `Agora são ${hora} horas da tarde`
    } else{
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = 'rgb(17, 10, 46)'
         msg.innerHTML = `Agora são ${hora} horas da noite`
    }
}