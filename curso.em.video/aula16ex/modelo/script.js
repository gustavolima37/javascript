//fazendo a ligação do JS com HTML pelos IDs
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Criando as funções
//função pra saber se n é um numero e se esta dentro de 1 a 100. 
function isNumero(n) {
    if (Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
    
}

//função pra saber se o numero digitado ja contem na lista, se sim, nao irá adicionar.
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//função para adicionar o numero na lista caso o numero nao ja o tenha.
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus() //pra apagar o numero depois que for adicionado.
}

//função pra finalizar depois de adicionar os elementos.
function finalizar() {
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        //analisando o maior numero e menor numero adicionado na lista e somando todos.
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
            maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }         
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}