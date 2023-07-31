//criando as variaveis ligadas aos elementos HTML
const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

//função pra saber se a lampada esta quebrada
function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}

//criando a função de ligar a lampada
function lampOn() {
    if (!isLampBroken()){
    lamp.src = './img/ligada.jpg'
    }
}

//criando a função de desligar a lampada
function lampOff() {
    if (!isLampBroken()){
        lamp.src = './img/desligada.jpg'
    }    
}

//criando a função da lampada quebrada
function lampBroken() {
    
        lamp.src = './img/quebrada.jpg'
    
}

//função de ligar e desligar, mudando o botao e a ação da lampada.
function lampOnOff() {
    if ( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar'
    }else {
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
    
}

//adicionando evento de clicar para ligar/desligar a lampada
turnOnOff.addEventListener('click', lampOnOff)

//lamp.addEventListener ('mouseover', lampOn)
//lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroken)