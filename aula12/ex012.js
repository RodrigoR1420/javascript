let agora = new Date()
let hora = agora.getHours()

if(hora >= 6 && hora <= 12){
    console.log('Good Morning')
} else if (hora >= 13 && hora <= 18){
    console.log('Good Aftrnoon')
}else{
    console.log('Good night')
}