const js = document.querySelector('.js')

js.addEventListener('click', clicked)
js.addEventListener('mouseout', out)
js.addEventListener('mouseenter', enter)

function clicked(){
    js.innerHTML = 'clicked'
    js.style.backgroundColor = 'darkblue'
    js.style.fontSize = '2em'
    js.style.color = 'white'
}

function enter(){
    js.innerHTML = 'enter'
    js.style.backgroundColor = 'white'
    js.style.fontSize = '2em'
    js.style.color = 'black'
}

function out(){
    js.innerHTML = 'out'
    js.style.backgroundColor = ' lightgrey'
    js.style.fontSize = '2em'
    js.style.color = 'white'
}