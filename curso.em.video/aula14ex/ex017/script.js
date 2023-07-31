function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value) //adicionando uma variavel e pondo o valor dela pra numero
        let c = 1 //contador
        tab.innerHTML = '' //pra limpar a tabuada
        while (c <= 10) {
            let item = document.createElement('option') //criando o elemento option no HTML
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` 
            tab.appendChild(item)//adicionando o elemento filho 'item' na variavel tab
            c++
        }
    }
}