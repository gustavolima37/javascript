function carregar() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 18//data.getHours()
    
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if (hora >= 0 && hora < 11) {
        //BOM DIA
        img.src = "manha2.png" 
        document.body.style.background = "#dba157"
        msg2.innerHTML = '<strong>-- BOM DIA --</strong>'
          
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = "tarde2.png"
        document.body.style.background = "#5a2b16"
        msg2.innerHTML = '<strong>-- BOA TARDE --</strong>'
    } else {
        //BOA NOITE
        img.src = "noite2.png"
        document.body.style.background = "#4c3855"
        msg2.innerHTML = '<strong>-- BOA NOITE --</strong>'
    }
}
