
const adicionar = document.querySelector('#view1')


function insert(value){

   adicionar.innerHTML += value

}

function clean() {

    adicionar.innerHTML = ''
    resultado.innerHTML = ''
}

function deleta() {
    if (adicionar.textContent){
    let result =adicionar.innerHTML
    adicionar.innerHTML = result.substring(0, result.length -1)
    }
}

function res() {    
    let operation =adicionar.innerHTML    
    if ( operation){
        adicionar.innerHTML = eval(operation)
       
    } else {
        window.alert('Erro: Insert Numbers')
    }
    
} 


