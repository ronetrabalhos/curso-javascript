// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
    console.log('Evento ocorrido: ', e.clientX, ',', e.clientY)
}