const js = document.querySelector('.js')

js.addEventListener('click', click)
js.addEventListener('mouseout', out)
js.addEventListener('mouseenter', enter)

function click(){
    js.innerHTML = 'clicked'
    js.style.backgroundColor = 'white'
    js.style.fontSize = '2em'
    js.style.color = 'black'
}

function enter(){
    js.innerHTML = 'enter'
    js.style.backgroundColor = 'black'
    js.style.color = 'white'
    js.style.fontSize = '2em'
}

function out(){
    js.innerHTML = 'out'
    js.style.backgroundColor = 'lightblue'
    js.style.fontSize = '2em'
     js.style.color = 'black'
}

function contar(){
    const i = document.querySelector('#inicio')
    const f = document.querySelector('#fim')
    const p = document.querySelector('#passo')
    const result = document.querySelector('.resultado')

    if(i.value == 0 || f.value == 0 || p.value == 0){
        alert('[ERRO] verifique as informações inseridas abaixo')
    } else{
        result.innerHTML = 'contando: <br>'

        let ini = Number(i.value)
        let fim = Number(f.value)
        let pas = Number(p.value)

        if(ini<fim){
            for(let c = ini; c <= fim; c+= pas){
                result.innerHTML += `${c} \u{1F449}` 
            }
        } else{
            for(let c = ini; c >= fim; c -= pas){
                 result.innerHTML += `${c} \u{1F449}`
            }
        } result.innerHTML += `\u{1F3C1}`
    }
}