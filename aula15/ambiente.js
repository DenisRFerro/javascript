let num = [5,8,2,9,3]

num.push(1)

num.sort()

console.log (`Nosso vetor é o ${num}`)
console.log (num)

console.log (`O vetor tem ${num.length} posições`)

console.log (num[0])
console.log (`O primeiro valor do vertor é ${num[0]}`)

let pos = num.indexOf(6)

if (pos == -1) {
    console.log('valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
