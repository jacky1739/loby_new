$(document).ready(function() {
    
    // datepicker--from
    $('#datepicker1').datepicker({ dateFormat: "yy-mm-dd" })
    $('#datepicker2').datepicker({ dateFormat: "yy-mm-dd" })
    
    // loginPage loading icon and errormessage
    $('.loadingDiv').hide()
    $('.login__errorMessage__word').hide()
    
    $('.login__btn__submit').click(function() {
        console.log('click')
        $('.loadingDiv').show()
        $('.login__errorMessage__word').show()
        setTimeout(function() {
            $('.loadingDiv').hide()
            $('.login__errorMessage__word').hide()
        }, 3000)
    })
})

function loginSubmit() {
    console.log('click')
}