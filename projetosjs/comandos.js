function verificar(){
let inicio = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passos = document.getElementById('txtp')
let res = document.getElementById('msg-top')

if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
    window.alert("[ERRO] INSIRA TODOS OS DADOS CORRETAMENTE")
}
else{
    res.innerHTML = 'Contando: '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passos.value)
    if(i<f){
        for(c = i;c <= f;c+=p){
        res.innerHTML += ` ${c} \u{1F449}`
    }
    }else{
        for(let c = i; c>= f; c-= p){
        res.innerHTML += ` ${c} \u{1F449}`
    }
    }
    res.innerHTML += `\u{1F3C1}`
}
}

