function tabuada(){
    const number = document.querySelector('#numb')
    const tab = document.querySelector('#seltab')
    
    if(number.value == ''){  
        alert('[ERRO] Por favor digite um número!')
    } else{
        let n = Number(number.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}