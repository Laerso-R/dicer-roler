// let tdados = document.querySelector('input#dados')
let res = document.querySelector('div#res')
var info = document.querySelector('div#info')
function rolar () {
    if (d4.checked) {
        var dados = 4
        var tdif = document.querySelector('input#difd4')
    } else if (d6.checked) {
        var dados = 6
        var tdif = document.querySelector('input#difd6')
    } else if (d8.checked) {
        var dados = 8
        var tdif = document.querySelector('input#difd8')
    } else if (d10.checked) {
        var dados = 10
        var tdif = document.querySelector('input#difd10')
    } else {
        var dados = 20
        var tdif = document.querySelector('input#difd20')
    }
    
    let dif = Number(tdif.value)
    let valor = Math.floor(Math.random()*dados+1)
    let total = valor + dif
    res.innerHTML = `Você rola: <strong>d${dados} (${valor}</strong>) + <strong>${dif}</strong> = <strong>${total}</strong>`
    document.querySelector('input#difd4').value = ''
    document.querySelector('input#difd6').value = ''
    document.querySelector('input#difd8').value = ''
    document.querySelector('input#difd10').value = ''
    document.querySelector('input#difd20').value = ''
}




