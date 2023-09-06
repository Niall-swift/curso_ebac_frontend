$(document).ready(function() {
    
    $('form').on('submit', function(e){
        e.preventDefault()


        const inputVal = $('#put').val()

        const novoItem = $('<ul></ul>')

        const div = $('#lis')

        const il = $(`<li>${inputVal}</li>`).appendTo(novoItem)

        novoItem.appendTo(div)

        $(il).click(function(){

            $(this).addClass('licheck')
        })


        $('#put').val('')

    })
})