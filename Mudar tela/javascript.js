function cores(){
   var fundo = document.getElementsByName('cor')
   if(fundo[0].checked){
       document.body.style.background = "#FF6961"
       
   }
   else if(fundo[1].checked){
        document.body.style.background = "#ADD8E6"
   }
   else{
       document.body.style.background ="#77dd77"
   }
}
function MudarTamanho(){
    var tamanho = document.getElementsByName('tamanho')
    if(tamanho[0].checked){
        var mud = document.getElementById('topo')
        mud.style.width = "90%"
        mud.style.marginLeft = "5%"
        mud.style.transition = '1.5s'
        
    }

    else if(tamanho[1].checked){
        var mud = document.getElementById('topo')
        mud.style.width = "75%"
        mud.style.marginLeft = "13%"
    }
    else if(tamanho[2].checked){
        var mud = document.getElementById('topo')
        mud.style.width = "50%"
        mud.style.marginLeft = "25%"
    }

}
function MudarTexto(){
    var texto = document.getElementById('txt').value
    var mudou = document.getElementById('titulo')
    mudou.innerText = texto 
}