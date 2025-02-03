function verificar(){
    const data = new Date()
    const anoAtual = data.getFullYear()
    const fAno = document.querySelector('#ano')
    const res = document.querySelector('.result')
   
    if(fAno.value == 0 || fAno.value > anoAtual){
        alert('[ERRO] Verifique a data preenchida abaixo!')
    } else{
        const idade = anoAtual - Number(fAno.value)
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(idade >= 18){
            res.innerHTML = `You are ${idade} years old and can drive my G`
            img.setAttribute('src', 'car.jpg')
        } else if(idade >= 17){
            res.innerHTML = 'You are very young to drive, come back here next year'
            img.setAttribute('src', 'bike.jpg')
        } else if(idade >= 16){
            res.innerHTML = 'You are very young to drive, come back here in 2 years'
            img.setAttribute('src', 'bike.jpg')
        } else {
            res.innerHTML = 'You are very young to drive, don´t come back here'
            img.setAttribute('src', 'bike.jpg')
        }
        res.appendChild(img)
    }
}