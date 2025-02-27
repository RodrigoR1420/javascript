const js = document.querySelector('.js')

js.addEventListener('click', clicar)
js.addEventListener('mouseenter', entrar)
js.addEventListener('mouseout', sair)

function clicar(){
    js.innerHTML = 'Clicou'
    js.style.backgroundColor = 'green'
    js.style.fontSize = '2em'
}

function entrar(){
    js.innerHTML = 'Entrou'
    js.style.backgroundColor = 'darkgreen'
    js.style.fontSize = '2em'
    js.style.color = 'white'
}

function sair(){
    js.innerHTML = 'Saiu'
    js.style.backgroundColor = 'lightgreen'
    js.style.fontSize = '2em'
}

function verificar(){
    const data = new Date()
    const anoAtual = data.getFullYear()
    const fAno = document.querySelector('#nasci')
    const res = document.querySelector('.result')

    if(fAno.value == 0 || fAno.value > anoAtual){
        alert('[ERRO] Verifique os dados informados abaixo!')
    } else{
        const idade = anoAtual - Number(fAno.value)
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(idade >= 18){
            res.innerHTML = `Você tem ${idade} e já pode dirigir!`
            img.setAttribute('src', 'car.jpg')
        } else{
            res.innerHTML = `Você tem apenas ${idade} e ainda é muito novo para dirigir!`
            img.setAttribute('src', 'bike.jpg')
        }
        res.appendChild(img)
    }
}