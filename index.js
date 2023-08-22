
var button = document.querySelector('button')
var form = document.querySelector('form')
var message = document.getElementById('message')
const erro_message = `Isso não ta legal B deve ser maio que A`
const sussec_message = `Muito bem :)`
const igual_message = `Não e valido pois B é igual A!`

function verifica(inputA,inputB){
    return inputA > inputB
}

form.addEventListener('submit', function(e) {

    e.preventDefault();

    var inputA = document.getElementById('inputA')
    var inputB = document.getElementById('inputB')

    formValido = verifica(inputA.value ,inputB.value);

    if(formValido){
        message.innerHTML = erro_message
        message.style.color = '#FF1E1E'
    }else{
        message.innerHTML = sussec_message
        message.style.color = '#16FF00'
    }
    inputA.value = ''
    inputB.value = ''
})

button.addEventListener('click', function(){
    verifica()
})