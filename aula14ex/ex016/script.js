function contar(){
    const inicio = document.querySelector('#num1')
    const fim = document.querySelector('#num2')
    const passo = document.querySelector('#num3')
    const res = document.querySelector('.result')

    

    if(inicio.value== 0 || fim.value == 0 || passo.value == ''){
        alert(`[ERRO] Verifique os dados inseridos!`)
    } else{
        res.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('[ERRO] Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            } 
        } else{ 
            if(i > f){
                //Contagem Descrescente
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
        }
         res.innerHTML += `\u{1F3C1}`
    }
}