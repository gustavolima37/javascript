function contar() {
    //adicionando variaveis ligadas aos ids correspondentes na HTML
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0){ //verificando se foi digitado os valores nas caixas.
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO] Faltam dados!!')
        
    } else {
        //começando a contar e verificando os valores.
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i<f){
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` //adicionando emoji no js, o codigo trocando U+ por \u{codigo}
            }
            
        
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
               
        }
        res.innerHTML += `\u{1F3C1}` //adicionando a bandeira no final da contagem.
    }
}