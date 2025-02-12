let valores = [8, 7, 1, 4, 2, 9]
valores.push(6)
valores.sort()
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem valor em ${valores[pos]}`)
}