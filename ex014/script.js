function carregar () {
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem') 
 var data = new Date()
 var hora = data.getHours()
 var minuto = data.getMinutes()
 msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
 if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'bomdia.png'
    document.body.style.background = "#e2cd9f"
 } else if (hora >= 12 && hora <= 18) {
   //BOA TARDE!
   img.src = 'boatarde.png'
   document.body.style.background = "#6F2C14"
 } else {
    //BOA NOITE!
    img.src = 'boanoite.png'
    document.body.style.background = "#0B2B30"

 }
}