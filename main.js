$(document).ready(function() {
    
    $('form').on('submit', function(e){
        e.preventDefault()


        const inputVal = $('#put').val()

        const novoItem = $('<ul></ul>')

        const div = $('#lis')

        const il = $(`<li>${inputVal}</li>`).appendTo(novoItem)

        novoItem.appendTo(div)

        $('#put').val('')


            $(il).click(function(){

                $('li').addClass('licheck')
            })

        console.log(div)
    })
})