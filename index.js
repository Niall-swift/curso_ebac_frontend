
var button = document.querySelector('button')
var form = document.querySelector('form')
var message = document.getElementById('message')
const erro_message = `Isso não ta legal B deve ser maio que A`
const sussec_message = `Muito bem :)`

function verifica(){
    var inputA = document.getElementById('inputA')
    var inputB = document.getElementById('inputB')

    if(inputA.value > inputB.value){
        message.innerHTML = erro_message
    }else{
        message.innerHTML = sussec_message
    }if(inputA.value === inputB.value){
        message.innerHTML = erro_message
    }else{
        message.innerHTML = sussec_message
    }

    setTimeout(()=>{
        message.innerHTML = ''
    },30000)
    
        inputA.value = ''
        inputB.value = ''
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

button.addEventListener('click', function(){
    verifica()
})