function verificar() {
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual
    var fano = document.getElementById('txtano') //ano digitado pelo usuario
    var res = document.querySelector('div#res') //transformar res em variavel
    
    
    if(fano.value.length == 0 || Number(fano.value) > ano){ //Para uma string vazia, length é 0. Se o valor digitado pelo usuario(fano)transformado em number(Number) for maior que o ano atual.
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //existe a opção [0] e [1]
        var idade = ano - Number(fano.value) //ano atual menos ano digitado pelo usuario
        var gênero = "" //string vazia
        var img = document.createElement('img') //criando a variavel img e criando a tag img no corpo do HTML
    
        img.setAttribute('id', 'foto') //Atribuindo 'id' e 'foto na tag img

        if(fsex[0].checked){ //verificando a idade que ele esta e atribuindo a foto correspondente.
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto_crianca_homem.png')
                
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_homem.png')
                
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto_adulto_homem.png')
                
            }else {
                //idoso
                img.setAttribute('src', 'foto_idoso_homem.png')
                
            }
        }else if(fsex[1].checked){ //verificando a idade que ela esta e atribuindo a foto correspondente.
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto_crianca_mulher.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_mulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto_adulto_mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto_idoso_mulher.png')
            }
        }
        

        
        res.style.textAlign = 'center' //adicionando estilo diretamente.
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)

    }
    
}

    