function contar() {
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')
var i = Number(inicio.value)
var f = Number(fim.value)
var p = Number(passo.value)

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerText = `Impossível Calcular, adicione valores!`  

} else {

res.innerHTML = `Contando: `
if (p <=0) {
    window.alert ('Passo Errado! Considerando Passo = 1')
    p = 1
}
//contagem regressiva
if (f < i ) {
    for (var i ; i >= f ; i -= p)
    res.innerHTML += `${i} \u{1F449}`
}

//contagem progressiva
for ( var i  ; i <= f ; i += p ) {
    
    res.innerHTML += `${i} \u{1F9DB}`
       
}
    res.innerHTML += `\u{1F3C1}`

}

}
