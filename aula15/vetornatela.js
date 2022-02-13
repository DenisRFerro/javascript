let valores = [8,1,7,4,2,9]

console.log("")

console.log('mostra todos o valores dentro do vertor. Porém com uma apresentação pouco atraente')
console.log(valores)

console.log("")

console.log('mostra os valores individualmente, porém utiliza muitas linhas para isso')
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

console.log("")

console.log('função para exibir valores, versão mais curta que solução acima para exibir os valores de um array')
for(let pos=0 ; pos < valores.length ; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log("")

console.log('função "for in" para exibir valores de maneira ainda mais curta')
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}