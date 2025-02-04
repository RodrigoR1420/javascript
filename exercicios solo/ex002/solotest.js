const rodo = document.querySelector('.redondo')

rodo.addEventListener('click', clicar)
rodo.addEventListener('mouseenter', entrar)
rodo.addEventListener('mouseout', sair)

function clicar(){
    rodo.innerHTML = 'clicado'
    rodo.style.backgroundColor = 'lightgreen'
    rodo.style.color = 'black'
}

function entrar(){
    rodo.innerHTML = 'entrou'
    rodo.style.backgroundColor = 'green'
}

function sair(){
    rodo.innerHTML = 'saiu'
    rodo.style.backgroundColor = 'red'
}

function somar(){
    const nn1 = document.querySelector('#num0')
    const nn2 = document.querySelector('#num1')
    const rrs = document.querySelector('.resu')
    const n1 = Number(nn1.value)
    const n2 = Number(nn2.value)
    const soma = n1 + n2

    rrs.innerHTML = `A soma entre ${n1} e ${n2} é = ${soma}`
}

function check(){
    const data = new Date()
    const ano = data.getFullYear()
    const nm = document.querySelector('#name')
    const birth = document.querySelector('#birthday')
    const res = document.querySelector('.result')
    const name = String(nm.value)

    if(nm.value == '' || birth.value ==''){
        alert('[ERRO] Verifique os dados preenchidos!')
    } else{
        let idade = ano - Number(birth.value)
        const radsex = document.getElementsByName('radsex')
        let sexo = '' 
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(radsex[0].checked){
            sexo = 'Masculino'
            img.setAttribute('src', 'homem.jpg')
        } else if(radsex[1].checked){
            sexo = 'Feminino'
            img.setAttribute('src', 'mulher.jpg')
        }
        res.innerHTML = `Olá ${name}, você tem ${idade} anos, e é do sexo ${sexo}`
        res.style.textAlign = 'center'
        res.appendChild(img)
    } 
}

function contar(){
    const inicio = document.querySelector('#inicio')
    const fim = document.querySelector('#fim')
    const passo = document.querySelector('#passo')
    const result = document.querySelector('.resultado')

    if(inicio.value == 0 || fim.value == 0 || passo.value == ''){
        alert('[ERRO] Verifique os dados inseridos!')
    } else{
        result.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            for(let c = i; c <= f; c += p){
                result.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(let c = i; c >= f; c -= p){
                result.innerHTML += `${c} \u{1F449}`
            }
        } 
        result.innerHTML += `\u{1F3C1}`
    }
}