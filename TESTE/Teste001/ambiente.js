function enviar(){
    let txt = window.document.querySelector('input#input')
    let res = window.document.querySelector('div#res')
    let nome = String(txt.value)
    res.innerHTML = nome
}