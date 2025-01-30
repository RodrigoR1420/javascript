function verificar(){
    const data = new Date()
    const anoAtual = data.getFullYear()
    const fAno = document.querySelector('#ano')
    const res = document.querySelector('.res')

    if(fAno.value == 0 || fAno.value > anoAtual){
        alert('[ERRO] Verifique os dados preenchidos abaixo!')
    } else{
        const idade = anoAtual - Number(fAno.value)
        const radsex = document.getElementsByName('radsex')
        let genero = ''
        if(radsex[0].checked){
            genero = 'Masculino'
        } else if(radsex[1].checked){
            genero = 'Feminino'
        }
        res.innerHTML = `Você tem ${idade} anos e é do sexo ${genero}`
    } 
}