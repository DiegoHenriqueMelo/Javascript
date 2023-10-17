function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var txtv1 = window.document.querySelector('input#txtvel1')
    var txtv2 = window.document.querySelector('input#txtvel2')
    var res = window.document.querySelector('div#res')
    var nome = String(txtv.value)
    var sob = String(txtv1.value)
    var val = Number(txtv2.value)
    res.innerHTML = `Olá ${nome} ${sob}, no valor de R$${val}.000,00 temos 7 carros à venda!`
}
