const js = document.querySelector('.js')

js.addEventListener('click', click)
js.addEventListener('mouseenter', enter)
js.addEventListener('mouseout', out)

function click(){
    js.innerHTML = 'Cliked'
    js.style.backgroundColor = 'aliceblue'
    js.style.fontSize = '2em'
}

function enter(){
    js.innerHTML = 'enter'
    js.style.backgroundColor = 'lightblue'
    js.style.fontSize = '2em'
}

function out(){
    js.innerHTML = 'Out'
    js.style.backgroundColor = 'lightblue'
    js.style.fontSize = '2em'
}

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

function contar(){
    const inicio = document.querySelector('#num1')
    const fim = document.querySelector('#num2')
    const passo = document.querySelector('#num3')
    const res = document.querySelector('.resultado')

    if(inicio.value == 0 || fim.value == 0 || passo.value == ''){
        alert('[ERRO] Verifique os dados informados')
    } else{
        res.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } res.innerHTML += `\u{1F3C1}`
    }
}

function tabu(){
    const num = document.querySelector('#tabuada')
    const tab = document.querySelector('#tab')

    if(num.value == ''){
        alert('[ERRO] Digite um número para ver a tabuada!')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.innerHTML = `${n} X ${c} = ${n*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}